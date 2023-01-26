import { NextFunction, Request, Response } from "express";
require("dotenv").config();
import { User } from "../models/users.model";
import { jwtSign } from "../util/jwt";
import bcrypt from 'bcrypt'


export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { firstName, lastName, password, email } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10)
    const user = await User.create({
      firstName: firstName,
      lastName: lastName,
      password: hashedPassword,
      email: email,
    });
    res.status(200).json({ 'message': 'Registration Successful', 'data': user });
  } catch (err) {
    console.log(err);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const user: User|null = await User.findOne({ where: { email: `${req.body.email}` } })

    if(user) {
      const password: string = `${req.body.password}`;
      const compare: boolean = await bcrypt.compare(password,user.password);
      if(compare) {
        try {
          const token: string = jwtSign(user.email, user.id)
          res.status(200).send({
            message: 'Logged in Successfully!',
            token: token,
            data: user,
            status: 'success'
          });
        } catch(error) {
          console.log(error);
        }
      } else {
        res.status(401).json({
          message: 'Incorrect Password',
          status: 'error',
        });
      }
    } else {
      res.status(500).json({
        message: 'User Not Found',
        status: 'error'
      });
    }
  }
  catch (error) {
    console.log(error);
  }
}
