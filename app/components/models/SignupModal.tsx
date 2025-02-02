"use client";
import { useState } from "react";
import Model from "./model";
import useSignupModal from "@/app/hooks/useSignupModal";
import CustomButton from "../forms/CustomButton";

const SignupModel = () => {
  const signupModal = useSignupModal();

  const content = (
    <>
      <form className="space-y-3">
        <input
          placeholder="Your email address"
          type="email"
          className="w-full px-4 h-[54px] border border-gray-400 rounded-xl"
        ></input>
        <input
          placeholder="Your password"
          type="password"
          className="w-full  px-4 h-[54px] border border-gray-400 rounded-xl"
        ></input>
        <input
          placeholder="Re-enter password"
          type="password"
          className="w-full  px-4 h-[54px] border border-gray-400 rounded-xl"
        ></input>

        <p className="text-bold text-escapade">Error</p>
        <CustomButton label="submit" className="" />
      </form>
    </>
  );
  return (
    <Model
      isOpen={signupModal.isOpen}
      close={signupModal.close}
      label="Sign Up"
      content={content}
    />
  );
};
export default SignupModel;
