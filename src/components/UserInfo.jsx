import React from "react";
import { useSelector } from "react-redux";

const UserInfo = () => {
  const showUserInfoBar = useSelector((store) => store.userInfo.isInfoBarOpen);
  if (!showUserInfoBar)
    return (
      <div
        className={`fixed top-20 right-20 w-72 h-screen bg-white shadow-xl transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4">
          <h1 className="text-lg font-bold mb-4">User Info</h1>
          <hr />
          <div className="mt-4">
            <ul className="space-y-2">
              <li>Google Account</li>
              <li>Switch Account</li>
              <li>Sign out</li>
            </ul>
          </div>
          <hr className="my-4" />
          <div>
            <ul className="space-y-2">
              <li>YouTube Studio</li>
              <li>Purchases and Memberships</li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default UserInfo;
