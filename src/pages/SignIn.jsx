import React from "react";
import { z } from "zod";
import ReusableFormComp from "@/components/ReusableFormComp";
import { Link } from "react-router-dom";

const SignIn = () => {
  const SignInSchema = z.object({
    email: z.string().email({ message: "Invalid Email Adress" }),
    password: z
      .string()
      .min(8, { message: "Password Should at least eight character" }),
  });
  const initialValues = {
    email: "",
    password: "",
  };
  const fields = [
    { label: "Email", name: "email", type: "email" },
    { label: "Password", name: "password", type: "password" },
  ];
  const handleSubmit = (formValues) => {
    console.log("form submitted", formValues);
  };

  return (
    <div className=" flex  flex-col items-center  mt-4 font-bold  ">
      <h1 className="   font-roboto text-3xl mb-5 text-center">
        Reusable Form Components
      </h1>

      <div className="  flex flex-col   w-[330px] shadow-md p-6  ">
        <p className=" text-center font-roboto text-xl ">SIGN IN</p>
        <div className=" flex justify-center pt-4">
          <ReusableFormComp
            schema={SignInSchema}
            initialValues={initialValues}
            fields={fields}
            onSubmit={handleSubmit}
            submitBtnText={"Sign In"}
          />
        </div>
        <h1 className=" text-center mt-3 text-xs text-blue-600 py-4">
          Don't have an account ?{" "}
          <span className=" text-green-400 mx-3 text-xm">
            <Link to="/signup ">Sign Up</Link>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default SignIn;
