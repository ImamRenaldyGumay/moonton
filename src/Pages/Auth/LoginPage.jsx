import React from "react";
import Logo from "../../../public/moonton.svg";
import LogoWhite from "../../../public/moonton-white.svg";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-black flex justify-center gap-10">
      <div className="bg-yellow-500">kkdkdk</div>
      <div className=" flex items-center">
        <div className="logo">
          <img src={LogoWhite} alt="moonton-logo" className="py-10" />
          <div className="text-white pb-10">
            <h1 className="font-bold text-3xl">Welcome Back</h1>
            <p>
              Explore our new movies and get the better insight for your life
            </p>
          </div>

          <div className="form">
            <div class="mb-5">
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div class="mb-5">
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your password
              </label>
              <input
                type="password"
                id="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
