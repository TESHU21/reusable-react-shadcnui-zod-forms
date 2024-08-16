import React from "react";
import { z } from "zod";
import { Link } from "react-router-dom";
import ReusableFormComp from "@/components/ReusableFormComp";

const SignUp = () => {
  const SignUpSchema = z
    .object({
      // fullname: z
      //   .string()
      //   .min(2, { message: "Full Name must contail at least two characters" }),
      // username: z
      //   .string()
      //   .min(2, { message: "username must contain at least two characters" }),
      email: z.string().email({ message: "Invalid Email" }),
      role: z.enum(["admin", "user", "guest"], {
        message: "role should be admin or user or guest",
      }),
      password: z.string().min(8, {
        message: "password should contain at least eight characters",
      }),
      confirmPassword: z.string().min(8, {
        message: "password should contain at least eight characters",
      }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ["confirmPassword"],
      message: "password do not match",
    });
  const intialValues = {
    // fullname: "",
    // username: "",
    email: "",
    role: "",
    password: "",
    confirmPassword: "",
  };
  const fields = [
    // { label: "Full Name", name: "fullname", type: "text" },
    // { label: "User Name", name: "username", type: "text" },
    { label: "Email", name: "email", type: "email" },
    {
      label: "Role",
      name: "role",
      type: "select",
      options: [
        { label: "Admin", value: "admin" },
        { label: "User", value: "user" },
        { label: "Guest", value: "guest" },
      ],
    },
    { label: "Password", name: "password", type: "password" },
    { label: "Confirm Password", name: "confirmPassword", type: "password" },
  ];
  const handleSignUp = (formValues) => {
    console.log("Sign Up Value", formValues);
  };

  return (
    <div className=" flex flex-col items-center mx-4   ">
      <div className="  shadow-md w-[500px] bg-white pt-2 px-11 mt-2">
        <h1 className=" font-roboto text-2xl text-center  text-green-500 font-bold">
          Sign Up
        </h1>

        <ReusableFormComp
          schema={SignUpSchema}
          initialValues={intialValues}
          fields={fields}
          onSubmit={handleSignUp}
          submitBtnText={"Sign Up"}
        />
        <div>
          <h1 className=" text-center mt-3 text-xs text-blue-600 py-4">
            Already have an account ?{" "}
            <span className=" text-green-400 mx-3 text-xm">
              {" "}
              <Link to="/"> Sign In</Link>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
