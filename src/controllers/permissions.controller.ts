import { RequestHandler } from "express";
import { Permission } from "../models/permissions.model";

export const getAllPermissions: RequestHandler = async (req, res, next) => {
  const allPermissions: Permission[] = await Permission.findAll();
  return res
    .status(200)
    .json({ message: "Permissions fetched successfully", data: allPermissions });
};

export const createPermission: RequestHandler = async (req, res, next) => {
  const permission = await Permission.create({ ...req.body });
  return res
    .status(200)
    .json({ message: "Permission created successfully", data: permission });
};

export const updatePermission: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  await Permission.update({ ...req.body }, { where: { id } });
  const updatedPermission: Permission | null = await Permission.findByPk(id);
  return res
    .status(200)
    .json({ message: "Permission updated successfully", data: updatedPermission });
};

export const getPermissionById: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const permission: Permission | null = await Permission.findByPk(id);
  return res.status(200).json({ message: "Permission fetched successfully", data: permission });
};

export const deletePermission: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const deletedPermission: Permission | null = await Permission.findByPk(id);
  await Permission.destroy({ where: { id } });
  return res
    .status(200)
    .json({ message: "Permission deleted successfully", data: deletedPermission });
};