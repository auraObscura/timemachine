import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MailIcon } from "@heroicons/react/solid";
import Gpt3Api from "../api/Gpt3Api";
import PollyApi from "../api/PollyApi";
import TimeMachineApi from "../api/TimeMachineApi";

const Conversation = (props) => {
  const { id } = useParams();
  const [convo, setConvo] = useState([]);

  useEffect(() => {
    loadLines();
  }, []);

  const loadLines = async () => {
    const data = await TimeMachineApi.getConversationLines(id);
    if (data) {
      return setConvo(data.lines);
    }
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const data = new FormData(evt.target);
    data.set("id", id);

    const res = await Gpt3Api.generate(data);
    if (res) {
      const output_text = res.choices[0].text;
      // const output_audio = await PollyApi.synthesize(output_text);
      setConvo(convo.push(output_text));
    }
  };

  return (
    <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
      <div className="px-4 py-5 sm:p-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {convo.map((line) => {
            return (
              <div>
                <p>{`User: ${line.input_text}`}</p>
                <p>{`Marcus: ${line.output_text}`}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="px-4 py-4 sm:px-6">
        <div>
          <label
            htmlFor="input"
            className="block text-sm font-medium text-gray-700"
          >
            Ask or Talk About Anything
          </label>
          <div className="mt-1">
            <form onSubmit={handleSubmit}>
              <textarea
                rows={4}
                name="user_text"
                id="user_text"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm mb-2 border-gray-300 rounded-md"
                defaultValue={""}
              />
              <span className="flex items-end">
                <button
                  type="submit"
                  className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-slate-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <MailIcon
                    className="-ml-0.5 mr-2 h-4 w-4"
                    aria-hidden="true"
                  />
                  Submit
                </button>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
