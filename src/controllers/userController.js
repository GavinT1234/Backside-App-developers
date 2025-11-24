import {
    createNewUser,
    getUserById,
    getAllUsers,
    modifyUser,
    removeUser,
} from '../services/userService.js';

import bcrypt from 'bcrypt';

export async function createUserHandler(req, res) {
    const { displayName, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await createNewUser({ displayName, email, password: hashedPassword });

    res.status(201).json(user);
}

export async function getUserHandler(req, res) {
    const { id } = req.params;

    const user = await getUserById(parseInt(id));
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(user);
}

export async function getAllUsersHandler(req, res) {
    const users = await getAllUsers();
    res.status(200).json(users);
}

export async function updateUserHandler(req, res) {
    const { id } = req.params;
    const { displayName, email, password } = req.body;

    const updates = {};
    if (displayName) updates.displayName = displayName;
    if (email) updates.email = email;
    if (password) updates.password = await bcrypt.hash(password, 10);

    const user = await modifyUser(parseInt(id), updates);
    res.status(200).json(user);
}

export async function deleteUserHandler(req, res) {
    const { id } = req.params;

    await removeUser(parseInt(id));
    res.status(204).send();
}