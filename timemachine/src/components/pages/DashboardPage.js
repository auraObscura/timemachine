import { Link, Outlet, useNavigate } from "react-router-dom";
import { Fragment, useState } from "react";
/* images */
import {
  ChatIcon,
  HomeIcon,
  MenuIcon,
  UsersIcon,
  LogoutIcon,
  XIcon,
} from "@heroicons/react/outline";
import logo from "./time-machine2.png";
/* internal api calls */
import TimeMachineApi from "../../api/TimeMachineApi";
/* 3rd party api calls */
import PollyApi from "../../api/PollyApi";
import Gpt3Api from "../../api/Gpt3Api";

const navigation = [
  { name: "Dashboard", href: "#/dashboard", icon: HomeIcon, current: true },
  {
    name: "Avatars",
    href: "all-avatars",
    icon: UsersIcon,
    current: false,
  },
  {
    name: "Conversations",
    href: "convo-history",
    icon: ChatIcon,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DashboardPage(props) {
  const nav = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = async () => {
    const data = await TimeMachineApi.logout();
    if (data) {
      props.setUsername("");
      nav("/");
    }
  };

  return (
    <>
      <div>
        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          {/* Sidebar component */}
          <div className="flex-1 flex flex-col min-h-0 bg-gray-800">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <span className="flex items-center flex-shrink-0 px-4">
                <img className="h-8 w-auto" src={logo} alt="Time Machine" />
              </span>
              <span className="flex items-center flex-shrink-0 px-4">
                <h1 className="text-white font-extrabold">TimeMachine</h1>
              </span>
              <nav className="mt-5 flex-1 px-2 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? "text-gray-300"
                          : "text-gray-400 group-hover:text-gray-300",
                        "mr-3 flex-shrink-0 h-6 w-6"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex-shrink-0 flex bg-gray-700 p-4">
              <span className="flex-shrink-0 w-full group block">
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block h-9 w-9 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-white">
                      {props.username}
                    </p>
                    <p className="text-xs font-medium text-gray-300 group-hover:text-gray-200">
                      View profile
                    </p>
                  </div>
                  <span className="inline-flex rounded-md shadow">
                    <Link
                      to="/"
                      onClick={handleLogout}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md bg-white hover:text-slate-700 text-slate-500"
                    >
                      Log out
                    </Link>
                  </span>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className="md:pl-64 flex flex-col flex-1">
          <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <main className="flex-1">
            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">
                  Dashboard
                </h1>
              </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <Outlet />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
