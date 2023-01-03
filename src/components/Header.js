import React, { useState } from "react";
import { FaPlus, FaApple } from "react-icons/fa";

function Header() {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="flex items-center justify-between bg-slate-600 px-2 text-gray-100">
      <div className="flex items-center">
        <FaApple className="mr-1 text-xl" />
        <div className="text-xl font-semibold mr-1">Egeckmk</div>
        <div className="text-xl font-semibold text-gray-300">Reminders</div>
      </div>
      <div className="flex items-center">
        <span className="mr-3 my-2">
          <FaPlus />
        </span>
        <div className="my-1">
          <button
            onClick={() => setShowOptions((prev) => !prev)}
            className="flex"
          >
            <img
              className="w-8 h-8 rounded-full border border-gray-100"
              src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              alt="user photo"
            />
          </button>

          {showOptions && (
            <div className="bg-slate-600 absolute top-[3rem] right-[0.5rem] flex flex-col items-start rounded p-2 w-fit">
              <div className="py-3 px-4 text-sm text-gray-900">
                <div className="text-lg font-semibold text-gray-300">
                  Ege Çakmak
                </div>
                <div className="text-sm font-normal text-gray-400">
                  egeckmk@gmail.com
                </div>
              </div>
              <div className="py-1 text-sm text-gray-300 w-full">
                <div>
                  <a
                    href="#"
                    className="block py-2 px-4 text-gray-300 hover:bg-slate-300 hover:text-gray-700"
                  >
                    Settings
                  </a>
                </div>
              </div>
              <div className="py-1 text-sm text-gray-400 w-full">
                <a
                  href="#"
                  className="block py-2 px-4 text-sm font-normal text-red-400 hover:bg-slate-300 hover:text-red-600"
                >
                  Sign out
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
