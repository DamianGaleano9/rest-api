import { Router } from "express";
import { methods as UsersControllers } from "../controllers/users.controllers";

const router = Router();



// ROUTES FOR USERS 

router.get("/", UsersControllers.getUsers);
router.get("/:users_id", UsersControllers.getUser);
router.post("/", UsersControllers.addUser);
router.put("/:users_id", UsersControllers.updateUser);
router.delete("/:users_id", UsersControllers.deleteUser);



export default router;