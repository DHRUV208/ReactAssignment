import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const One = ({showItems, setShowIndex}) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
     const navigate = useNavigate();
    return (
        <div className="flex justify-center items-end ">
        <div className="m-4 ">Form-2
        <form
          className="max-w-lg mx-auto mt-6 border border-black"
          onSubmit={handleSubmit((data) => {
            console.log(data);
            alert("Success");
            navigate('/success');

            // setShowIndex(!showItems);
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
            type="number"
              className="w-96 shadow-lg"
              {...register("age", { required: true, pattern: {
                value: /\d+/,
                message: "This input is number only.",
              }, })}
              placeholder="age"
            />{" "}
            {errors.age?.type === "required" && (
              <p role="alert">age is required</p>
            )}
          {errors.age && <p role="alert">{errors.age.message}</p>}

          </div>
        
          <button
            className="cursor-pointer border border-black w-96 shadow-lg m-4 rounded-lg p-4"
            type="submit"
            onClick={()=>{
            // navigate('/success');

            }}
          >Save</button>
        </form>
        </div>
       
        
      </div>
    )
    }

    export default  One;