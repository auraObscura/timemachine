import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { TrashIcon, DotsVerticalIcon } from "@heroicons/react/solid";
import TimeMachineApi from "../../api/TimeMachineApi";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const ConvoHistoryCard = (props) => {
  let id = props.convo.id;
  const [isFavorite, setIsFavorite] = useState(false);
  const deleteHandler = async () => {
    return await TimeMachineApi.deleteConversation(id);
  };
  const favoriteHandler = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="bg-stone-200 px-4 py-5 sm:px-6 mb-2 rounded">
      <div className="flex space-x-3">
        <div className="flex-shrink-0">
          <img
            className="h-10 w-10 rounded-full"
            src={props.avatar.avatar_img}
            alt={props.avatar.name}
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-gray-900">
            <Link
              to={`/dashboard/conversations/${id}`}
              className="hover:underline"
            >
              {props.avatar.name}
            </Link>
          </p>
          <p className="text-sm text-gray-500">
            <Link to="#" className="hover:underline">
              {props.convo.date}
            </Link>
          </p>
          <span>{props.convo.notes}</span>
        </div>
        <div className="flex-shrink-0 self-center flex">
          <Menu as="div" className="relative z-30 inline-block text-left">
            <div>
              <Menu.Button className="-m-2 p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600">
                <span className="sr-only">Open options</span>
                <DotsVerticalIcon className="h-5 w-5" aria-hidden="true" />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md opacity-100 shadow-lg bg-stone-100 ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="#"
                        onClick={favoriteHandler}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "flex px-4 py-2 text-sm"
                        )}
                      >
                        {!isFavorite ? (
                          <MdFavoriteBorder
                            className="mr-3 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        ) : (
                          <MdFavorite
                            className="mr-3 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        )}
                        <span>Add to favorites</span>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="#"
                        onClick={deleteHandler}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "flex px-4 py-2 text-sm"
                        )}
                      >
                        <TrashIcon
                          className="mr-3 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span>Delete</span>
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default ConvoHistoryCard;
