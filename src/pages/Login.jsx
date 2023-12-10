import logo from "../assets/images/logo.png";

const Login = () => {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src={logo} alt="Your Company" />
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Student Id
              </label>
              <div className="mt-2">
                <input
                  maxLength={8}
                  required
                  className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Pin
                </label>
              </div>
              <div className="mt-2">
                <input
                  maxLength={5}
                  required
                  className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6"
                />
              </div>
              <div className="text-sm mt-2">
                <a href="#" className="font-semibold text-ugBlue ">
                  Forgot Pin?
                </a>
              </div>
            </div>

            <div>
              <button className="flex w-full justify-center rounded-md bg-ugBlue p-3 text-white">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
