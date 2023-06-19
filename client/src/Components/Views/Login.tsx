import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { postAuthService } from "../../Services/AuthServices";
import { AuthFormValues } from "../../Interfaces/Interfaces";
import { useState } from "react";
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginSchema } from "../Validations/YupLogin";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormValues>({
    resolver: yupResolver(LoginSchema)
  });

  const navigate = useNavigate();

  const onsubmit = async (data: AuthFormValues) => {
    setIsLoading(true)

    try {
      const res = await postAuthService(data);
      if (res.status === 200) {
        navigate("/profile");
      } else {
        alert("Failed");
      }
    } catch (err) {
      alert("Login failed ...check your details");
    }
    setIsLoading(false)
  };

  return (
    <form onSubmit={handleSubmit(onsubmit)} className="Login_form">
      <div>
        <input
          type="text"
          placeholder="Name"
          {...register("name")}
        />
        <br />
        <p style={{ color: "red" }}>{errors.name?.message}</p>
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
        />
        <br />
        <p style={{ color: "red" }}>{errors.email?.message}</p>
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <br />
        <p style={{ color: "red" }}>{errors.password?.message}</p>
      </div>
      <button type="submit" disabled={isLoading}>Submit</button>
    </form>
  );
};

export default Login;
