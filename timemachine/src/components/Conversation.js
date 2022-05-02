import { useState } from "react";
import { useParams } from "react-router-dom";

const Conversation = (props) => {
  const { id } = useParams();
  const [convo, setConvo] = useState();

  return (
    <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
      <div className="px-4 py-5 sm:p-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Content goes here */}
        </div>
      </div>
      <div className="px-4 py-4 sm:px-6">
        <div>
          <label
            htmlFor="comment"
            className="block text-sm font-medium text-gray-700"
          >
            Add your comment
          </label>
          <div className="mt-1">
            <textarea
              rows={4}
              name="comment"
              id="comment"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              defaultValue={""}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
