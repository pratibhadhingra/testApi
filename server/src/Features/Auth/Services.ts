import jwt from "jsonwebtoken";

import { authData } from "../../Interfaces/Interfaces";

export const secretKey = "secretKey";

export class AuthServices {
  static loginService = async (body: authData) => {
    const AuthCredentials = {
      email: "prati@gmail.com",
      password: "hello",
    };

    const { email, password } = body;

    if (email && password) {
      if (
        email === AuthCredentials.email &&
        password === AuthCredentials.password
      ) {
        const response = {
          data: body,
          status: 200,
          message: "Profile data fetched!",
        };
        const token = jwt.sign({ email, password }, secretKey, {
          expiresIn: "300s",
        });
        console.log("token", token);

        return response;
      } else {
        const response = { status: 401, message: "Login data failed!" };
        return response;
      }
    }
  };
}
