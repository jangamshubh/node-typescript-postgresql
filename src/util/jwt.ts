import Jwt from "jsonwebtoken";
require('dotenv').config();

export const jwtSign = (email: string, id: any) => {
  return Jwt.sign({ email: email, id: id }, `${process.env.JWT_SECRET}`, {
    expiresIn: '7d'
  })
}

export const jwtVerify = (token: string) => {
  return Jwt.verify(token,`${process.env.JWT_SECRET}`);
}

