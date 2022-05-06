import { Link, useNavigate } from "react-router-dom";
import { ChatAltIcon, InformationCircleIcon } from "@heroicons/react/solid";
import TimeMachineApi from "../../api/TimeMachineApi";

const AvatarCard = (props) => {
  const nav = useNavigate();
  const convoHandler = async () => {
    const data = await TimeMachineApi.newConversation(props.avatar.id);
    nav(`/dashboard/conversations/${data.id}`);
  };
  return (
    <li className="col-span-1 flex flex-col text-center bg-stone-200 rounded-lg shadow divide-y divide-gray-400">
      <div className="flex-1 flex flex-col p-8">
        <img
          className="w-32 h-32 flex-shrink-0 mx-auto rounded-full"
          src={props.avatar.avatar_img}
          alt={props.avatar.name}
        />
        <h3 className="mt-6 text-gray-900 text-sm font-medium">
          {props.avatar.name}
        </h3>
        <dl className="mt-1 flex-grow flex flex-col justify-between">
          <dt className="sr-only">Description</dt>
          <dd className="text-gray-500 text-sm">{props.avatar.description}</dd>
          <dt className="sr-only">Voice</dt>
          <dd className="mt-3">
            <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
              {props.avatar.life}
            </span>
          </dd>
        </dl>
      </div>
      <div className="-mt-px flex divide-x divide-gray-400">
        <div className="w-0 flex-1 flex">
          <Link
            to="#"
            onClick={convoHandler}
            className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
          >
            <ChatAltIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
            <span className="ml-3">New Chat</span>
          </Link>
        </div>
        <div className="-ml-px w-0 flex-1 flex">
          <Link
            to={`${props.avatar.id}`}
            className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
          >
            <InformationCircleIcon
              className="w-5 h-5 text-gray-400"
              aria-hidden="true"
            />
            <span className="ml-3">Learn More</span>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default AvatarCard;
