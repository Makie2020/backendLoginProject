"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const userController_2 = require("../controllers/userController");
const userRouter = (0, express_1.Router)();
userRouter.post('/', userController_1.newUser);
userRouter.post('/login', userController_2.loginUser);
userRouter.get('/', userController_1.allUsers);
exports.default = userRouter;