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

const updateCurrentUser = async (req: Request, res: Response) => {
    try {
       const{name, addressLine1, country, city} = req.body;
       const user = await User.findById(req.userId);
       
       if (!user){
        return res.status(404).json({ message: "User not found"});
       }

       user.name = name;
       user.addressLine1 = addressLine1;
       user.city = city;
       user.country = country;

       await user.save();

       res.send(user);

    } catch (error) {
      console.log(error);
      res.status(500).json({message: "Error update of user"});
    }
};

export default {
    createCurrentUser,
    updateCurrentUser,
};