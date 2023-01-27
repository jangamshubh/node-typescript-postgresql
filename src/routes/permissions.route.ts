import { Router } from "express";

import {
  createPermission,
  deletePermission,
  getAllPermissions,
  updatePermission,
  getPermissionById
} from "../controllers/permissions.controller";

const router = Router();

router.get("/", getAllPermissions);

router.post("/", createPermission);

router.put("/:id", updatePermission);

router.get("/:id", getPermissionById);

router.delete("/:id", deletePermission);

export default router;