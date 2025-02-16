"use client";
import useLoginModal from "@/app/hooks/useLoginModal";
import useSignupModal from "@/app/hooks/useSignupModal";
import { useState } from "react";
import LogoutButton from "../LogoutButton";
import MenuLink from "./MenuLink";

interface UserNavProps {
  userId?: string | null;
}
const UserNav: React.FC<UserNavProps> = ({ userId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const loginModel = useLoginModal();
  const signupModel = useSignupModal();

  return (
    <div className="p-2 relative inline-block hover:bg-gray-100 rounded-full border border-gray-300">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="flex items-center"
      >
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
      </button>

      {isOpen && (
        <div className=" w-[220px] absolute top-[60px] bg-white border right-0 rounded-xl shadow-md flex flex-col ">
          {userId ? (
            <LogoutButton />
          ) : (
            <>
              <MenuLink
                label="Log in"
                onClick={() => {
                  setIsOpen(false);
                  loginModel.open();
                }}
              />
              <MenuLink
                label="Sign up"
                onClick={() => {
                  setIsOpen(false);
                  signupModel.open();
                }}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
};
export default UserNav;
