import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcryptjs.hash(password, 10); // Await the hash result
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json('User Created');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
