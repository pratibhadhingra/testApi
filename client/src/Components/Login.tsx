import { useForm } from "react-hook-form";
import axios from "axios";

export interface FormValues {
  name: string;
  email: string;
  password: string;
}

const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onsubmit = async (data: FormValues) => {

    try{
        alert('submitted');
        await axios.post("http://localhost:3000/api/v1/users", {
            data
        })
    } catch(err) {
        console.log(err)
    }
  };

  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <div>
        <input
          type="text"
          placeholder="Name"
          {...register("name", {
            required: {
              value: true,
              message: "name is required",
            },
          })}
        />
        <br />
        <p style={{ color: "red" }}>{errors.name?.message}</p>
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Invalid email format",
            },
          })}
        />
        <br />
        <p style={{ color: "red" }}>{errors.email?.message}</p>
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: {
              value: true,
              message: "password is required",
            },
          })}
        />
        <br />
        <p style={{ color: "red" }}>{errors.email?.message}</p>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
