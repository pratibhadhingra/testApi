import { userData } from "../../Interfaces/Interfaces";

let profileData: userData = {
  firstName: "pratibha",
  lastName: "dhingra",
  phoneNo: "9882882828",
  address: "Jaipur",
  email: "prati@gmail.com",
};

export class ProfileService {
  static postUserService = async (profile: userData) => {
    let response;
    try {
      profileData = { ...profileData, ...profile };
      response = {
        data: profileData,
        status: true,
        code: 200,
        message: "Profile data posted Successfully!",
      };
    } catch (error: any) {
      response = {
        code: 400,
        status: false,
        message: "Unable to post Profile Data!",
      };
    }
    return response;
  };

  static getUserProfile = async () => {
    let response;
    if (profileData) {
      response = {
        data: profileData,
        status: true,
        code: 200,
        message: "Profile data fetched Successfully!",
      };
    } else {
      response = { status: false, message: "Unable to fetch Profile Data!" };
    }
    return response;
  };
}

