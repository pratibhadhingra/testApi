import { useEffect, useState } from "react";
import { getUserService } from "../../Services/UserServices";
import { ProfileFormValues } from "../../Interfaces/Interfaces";
import { PROFILE_IMG } from "../../Constants/constants";

const ProfileDetails = () => {
  const [data, setData] = useState<ProfileFormValues>({
    firstName: "",
    lastName: "",
    phoneNo: "",
    address: "",
    email: "",
  });

  const profileData = async () => {
    const res = await getUserService();
    setData(res.data);
  };

  useEffect(() => {
    profileData();
  }, []);

  const { firstName, lastName, email, phoneNo, address } =
    data as ProfileFormValues;

  return (
    <div className="profile_details">
      <div className="profile_data">
        <img
          alt="profile"
          src={PROFILE_IMG}
        />
        <h2>
          {firstName.toUpperCase()} &nbsp;{lastName.toUpperCase()}
        </h2>
      </div>
      <div className="data">
      <h2>Contact : <span>{phoneNo}</span></h2>
        <h2>Email : <span>{email}</span></h2>
      <h2>Address : &nbsp;&nbsp;&nbsp;<span>{address}</span></h2>
      </div>
    </div>
  );
};

export default ProfileDetails;
