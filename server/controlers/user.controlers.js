import { User } from "../models/user.models.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiReasponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

export const registerUser = asyncHandler(async (req, res, next) => {
    console.log(`hit registerUser controller`);
    const { name, email, password } = req.body;
    console.log(`name: ${name}, email: ${email}, password: ${password}`);
    if (!name || !email || !password) {
        return new ApiError(400, "All fields are required");
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return next(new ApiError(409, "User already exists"));
    }
    const user = await User.create({ name, email, password });
    const userCreated = await User.findById(user._id).select("-password");
    if (!userCreated) {
        return next(new ApiError(500, "User creation failed"));
    }
    return res.status(201).json(new ApiReasponse(201, userCreated, "User registered successfully"));
});