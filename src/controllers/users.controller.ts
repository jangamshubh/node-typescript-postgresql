import { RequestHandler } from "express";
import { User } from "../models/users.model";

export const getAllUsers: RequestHandler = async (req, res, next) => {
  const allUsers: User[] = await User.findAll();
  return res
    .status(200)
    .json({ message: "Users fetched successfully", data: allUsers });
};

export const createUser: RequestHandler = async (req, res, next) => {
  var user = await User.create({ ...req.body });
  return res
    .status(200)
    .json({ message: "User created successfully", data: user });
};

export const updateUser: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  await User.update({ ...req.body }, { where: { id } });
  const updatedUser: User | null = await User.findByPk(id);
  return res
    .status(200)
    .json({ message: "User updated successfully", data: updatedUser });
};

export const getUserById: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  if((req.user) && (req.user.id == id)) {
    const user: User | null = await User.findByPk(id);
    return res.status(200).json({ message: "User fetched successfully", data: user });
  }
};

export const deleteUser: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const deletedUser: User | null = await User.findByPk(id);
  await User.destroy({ where: { id } });
  return res
    .status(200)
    .json({ message: "User deleted successfully", data: deletedUser });
};