import { useForm } from "react-hook-form";
import {  useNavigate } from "react-router-dom";
import { DataContext } from "../context/dataProvider";
import { useContext } from "react";

interface User {
  firstName: string;
  lastName: string;
  parentName: string;
  phoneNumber: number;
  mail: string;
  address: string;
}

const Form1: React.FC = () => {
    const navigate = useNavigate();
    const {setUserDetails} = useContext(DataContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();
  return (
    <div className="">
      <div className="m-4">Form-1</div>
      <form
        className="max-w-lg mx-auto mt-6 border border-black"
        onSubmit={handleSubmit((data: User) => {
          console.log(data);
          alert("Success");
          setUserDetails({
            "firstName": data.firstName,
            "lastName": data.lastName,
            "parentName": data.parentName,
            "phoneNumber": data.phoneNumber,
            "mail": data.mail,
            "address": data.address
        })
          navigate('/form');
        })}
      >
        <div className="mb-4">
          {" "}
          <input
            className="w-96 shadow-lg"
            {...register("firstName", { required: true })}
            placeholder="First Name"
          />{" "}
          {errors.firstName?.type === "required" && (
            <p role="alert">First name is required</p>
          )}
        </div>
        <div className="mb-4">
          {" "}
          <input
            className="w-96 shadow-lg"
            {...register("lastName", { required: true })}
            placeholder="Last Name"
          />{" "}
          {errors.lastName?.type === "required" && (
            <p role="alert">Last name is required</p>
          )}
        </div>
        <div className="mb-4">
          {" "}
          <input
            className="w-96 shadow-lg"
            {...register("parentName", { required: true })}
            placeholder="Parent Name"
          />{" "}
          {errors.parentName?.type === "required" && (
            <p role="alert">Parent name is required</p>
          )}
        </div>
        <div className="mb-4">
          <input
            type="number"
            className="w-96 shadow-lg"
            {...register("phoneNumber", {
              minLength: {  value: 10,  message: "This input must contain atleast 10 characters" },
            //   maxLength: { value: 11, message: "This input max 11 characters" },
              required: true,
              pattern: {
                value: /\d+/,
                message: "This input is number only.",
              },
            })}
            placeholder="Phone number"
          />{" "}
          {errors.phoneNumber && <p role="alert">Phone number is required</p>}
          {errors.phoneNumber && <p role="alert">{errors.phoneNumber.message}</p>}
        </div>
        <div className="mb-4">
          <input
            className="w-96 shadow-lg"
            type="email"
            {...register("mail", { required: true, pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address"
              } })}
            placeholder="Email"
          />{" "}
          {errors.mail && <p role="alert">Email Address is required</p>}
          {errors.mail && <p role="alert">{errors.mail.message}</p>}
        </div>
        <div className="mb-4">
          <input
            className="w-96 shadow-lg"
            {...register("address", { required: "Address is required" })}
            placeholder="Address"
          />{" "}
          {errors.address && <p role="alert">{errors.address.message}</p>}
        </div>
        <button
          className="cursor-pointer border border-black w-96 shadow-lg m-4 rounded-lg p-4"
          type="submit"
        >Next Step</button>
      </form>
    </div>
  );
};

export default Form1;
