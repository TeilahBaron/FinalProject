import { Request, Response } from "express";
import User from "../models/user";

const createCurrentUser = async(req: Request, res: Response) => {
    // check if the user exists
    // create a user if dosen't
    // return user to the frontend

    try {
        const {auth0Id} = req.body;
        const existingUser = await User.findOne({auth0Id});

        if (existingUser) {
            return res.status(200).send();
        }

        const newUser = new User(req.body);
        await newUser.save();

        res.status(201).json(newUser.toObject());
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error creating a user" });
    }
};

export default {
    createCurrentUser,
};