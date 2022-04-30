import { Link } from "react-router-dom";

const AvatarCard = (props) => {
  const convoHandler = () => {};

  <ul
    role="list"
    className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
  >
    <li
      key={props.avatar.id}
      className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
    >
      <div className="flex-1 flex flex-col p-8">
        <img
          className="w-32 h-32 flex-shrink-0 mx-auto rounded-full"
          src={props.avatar.avatar_img}
          alt=""
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
              {props.avatar.voice}
            </span>
          </dd>
        </dl>
      </div>
      <div>
        <div className="-mt-px flex">
          <form action="" method="post" onSubmit={convoHandler}>
            <input type="hidden" name="id" value={props.avatar.id} />
            <div className="w-0 flex-1 flex">
              {/* <Link
                to="#"
                onClick={}
                className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
              > */}
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                New Chat
              </button>
              {/* </Link> */}
            </div>
          </form>
        </div>
      </div>
    </li>
  </ul>;
};

export default AvatarCard;
