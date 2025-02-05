"use client";
import { useState } from "react";
import Model from "./model";
import { useRouter } from "next/navigation";
import useLoginModal from "@/app/hooks/useLoginModal";
import CustomButton from "../forms/CustomButton";
import apiService from "@/app/services/apiService";
import { handleLogin } from "@/app/lib/action";

const LoginModel = () => {
  const loginModel = useLoginModal();
  const router = useRouter();

  // Fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  const submitLogin = async () => {
    // form data to submit
    const formData = {
      email: email,
      password: password,
    };
    const response = await apiService.postWithoutToken(
      "/api/auth/login/",
      JSON.stringify(formData)
    );
    if (response.access) {
      // LoginView of the backend returned the user primary key, access token and the refresh token
      handleLogin(response.user.pk, response.access, response.refresh);
      // Closing the login modal
      loginModel.close();
      // Getting back to the home page
      router.push("/");
    } else {
      setErrors(response.non_field_errors);
    }
  };
  const content = (
    <>
      <form action={submitLogin} className="space-y-4">
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your e-mail address"
          type="email"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your password"
          type="password"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
        />

        {errors.map((error, index) => {
          return (
            <div
              key={`error_${index}`}
              className="p-5 bg-airbnb text-white rounded-xl opacity-80"
            >
              {error}
            </div>
          );
        })}
        <CustomButton onClick={submitLogin} label="submit" className="" />
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
