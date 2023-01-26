import { Router } from "express";

import {
  createUser,
  deleteUser,
  getAllUsers,
  updateUser,
  getUserById
} from "../controllers/users.controller";

const router = Router();

router.get("/", getAllUsers);

router.post("/", createUser);

router.put("/:id", updateUser);

router.get("/:id", getUserById);

router.delete("/:id", deleteUser);

export default router;