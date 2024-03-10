import { useForm } from "react-hook-form";

const Form1 = () => {
  const { register, handleSubmit } = useForm();
  return (
    <div className="">
      <div className="m-4">Form-1</div>
      <form
        className="max-w-lg mx-auto mt-6 border border-black"
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <div className="mb-4">
          {" "}
          <input className="w-96 shadow-lg" {...register("firstName")} placeholder="First Name" />{" "}
        </div>
        <div className="mb-4">
          {" "}
          <input className="w-96 shadow-lg" {...register("lastName")} placeholder="Last Name" />{" "}
        </div>
        <div className="mb-4">
          {" "}
          <input className="w-96 shadow-lg" {...register("parentName")} placeholder="Parent Name" />{" "}
        </div>
        <div className="mb-4">
          <input
            type="number"
            className="w-96 shadow-lg"
            {...register("phoneNumber", { min: 10, max: 11 })}
            placeholder="Phone number"
          />{" "}
        </div>
        <div className="mb-4">
          <input className="w-96 shadow-lg" {...register("emailId")} placeholder="Email" />{" "}
        </div>
        <div className="mb-4">
          <input className="w-96 shadow-lg" {...register("address")} placeholder="Address" />{" "}
        </div>
        <input className="cursor-pointer border border-black w-96 shadow-lg" type="submit" />
      </form>
    </div>
  );
};

export default Form1;
