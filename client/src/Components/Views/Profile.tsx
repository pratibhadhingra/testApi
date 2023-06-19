import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { getUserService, postUserService } from "../../Services/UserServices";
import { ProfileFormValues } from "../../Interfaces/Interfaces";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProfileSchema } from "../Validations/YupProfile";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProfileFormValues>({
    resolver: yupResolver(ProfileSchema),
  });

  const navigate = useNavigate();

  const getUserProfile = async () => {
    const res = await getUserService();

    if (res.status) {
      const fetchData = res.data;
      // console.log(fetchData)

      reset({
        firstName: fetchData.firstName,
        lastName: fetchData.lastName,
        phoneNo: fetchData.phoneNo,
        address: fetchData.address,
        email: fetchData.email,
      });
    }
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  const onsubmit = async (data: ProfileFormValues) => {
    try {
      const res = await postUserService(data);
      if (res.code === 200) {
        alert("submitted");
        navigate("/profile-details");
      } else {
        alert("Failed");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onsubmit)} className="Login_form">
        <h1>Fill your details</h1>
        <div>
          <input
            type="text"
            style={{ padding: "10px", borderRadius: "10px" }}
            placeholder="Enter your first name"
            {...register("firstName")}
          />
          <span style={{ color: "red" }}> {errors.firstName?.message}</span>
        </div>
        <br />

        <div>
          <input
            {...register("lastName")}
            placeholder="Enter your last name"
            style={{ padding: "10px", borderRadius: "10px" }}
          />
          <span style={{ color: "red" }}> {errors.lastName?.message}</span>
        </div>
        <br />

        <div>
          <input
            type="tel"
            style={{ padding: "10px", borderRadius: "10px" }}
            placeholder="Enter your phone number"
            {...register("phoneNo")}
          />
          <span style={{ color: "red" }}> {errors.phoneNo?.message}</span>
        </div>
        <br />

        <div>
          <input
            type="address"
            style={{ padding: "10px", borderRadius: "10px" }}
            placeholder="Enter your address"
            {...register("address")}
          />
          <span style={{ color: "red" }}> {errors.address?.message}</span>
        </div>
        <br />

        <div>
          <input
            type="email"
            style={{ padding: "10px", borderRadius: "10px" }}
            placeholder="Enter your email"
            {...register("email")}
          />
          <span style={{ color: "red" }}> {errors.email?.message}</span>
        </div>
        <br />

        <button
          type="submit"
          style={{ padding: "15px 35px", border: "none", borderRadius: "10px" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Profile;
