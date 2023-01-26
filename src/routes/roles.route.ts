import { Router } from "express";

import {
  createRole,
  deleteRole,
  getAllRoles,
  updateRole,
  getRoleById
} from "../controllers/roles.controller";

const router = Router();

router.get("/", getAllRoles);

router.post("/", createRole);

router.put("/:id", updateRole);

router.get("/:id", getRoleById);

router.delete("/:id", deleteRole);

export default router;