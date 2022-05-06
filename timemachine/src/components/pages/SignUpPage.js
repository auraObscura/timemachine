import { LockClosedIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";
import TimeMachineApi from "../../api/TimeMachineApi";
import logo from "./time-machine2.png";

export default function SignUpPage() {
  const navigate = useNavigate();

  // event handler
  const handleRegister = async (evt) => {
    evt.preventDefault();

    let registerData = {
      username: evt.target.elements["username"].value,
      password1: evt.target.elements["password1"].value,
      password2: evt.target.elements["password2"].value,
      convos: [],
    };

    const data = await TimeMachineApi.register(registerData);
    if (data) {
      sessionStorage.setItem("access_token", data.access_token);
      sessionStorage.setItem("user", data.user);
      navigate("/login");
    }
  };

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img className="mx-auto h-12 w-auto" src={logo} alt="Time Machine" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign up for an account today!
          </h2>
        </div>
        <form
          className="mt-8 space-y-6"
          onSubmit={handleRegister}
          method="POST"
        >
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="username"
                autoComplete="username"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
              />
            </div>
            <div>
              <label htmlFor="password1" className="sr-only">
                Password
              </label>
              <input
                id="password1"
                name="password1"
                type="password"
                autoComplete="current-password"
                required
                minLength="8"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password2"
                name="password2"
                type="password"
                required
                minLength="8"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password (again)"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
