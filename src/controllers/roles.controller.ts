import { RequestHandler } from "express";
import { Role } from "../models/roles.model";

export const getAllRoles: RequestHandler = async (req, res, next) => {
  const allRoles: Role[] = await Role.findAll();
  return res
    .status(200)
    .json({ message: "Roles fetched successfully", data: allRoles });
};

export const createRole: RequestHandler = async (req, res, next) => {
  const role = await Role.create({ ...req.body });
  return res
    .status(200)
    .json({ message: "Role created successfully", data: role });
};

export const updateRole: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  await Role.update({ ...req.body }, { where: { id } });
  const updatedRole: Role | null = await Role.findByPk(id);
  return res
    .status(200)
    .json({ message: "Role updated successfully", data: updatedRole });
};

export const getRoleById: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const role: Role | null = await Role.findByPk(id);
  return res.status(200).json({ message: "Role fetched successfully", data: role });
};

export const deleteRole: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const deletedRole: Role | null = await Role.findByPk(id);
  await Role.destroy({ where: { id } });
  return res
    .status(200)
    .json({ message: "Role deleted successfully", data: deletedRole });
};