"use client";
import { useState } from "react";
import Model from "./model";
import useLoginModal from "@/app/hooks/useLoginModal";
import CustomButton from "../forms/CustomButton";

const LoginModel = () => {
  const loginModel = useLoginModal();

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
        <p className="text-bold text-escapade">Error</p>
        <CustomButton label="submit" className="" />
      </form>
    </>
  );
  return (
    <Model
      isOpen={loginModel.isOpen}
      close={loginModel.close}
      label="Login In"
      content={content}
    />
  );
};
export default LoginModel;
