import {
    createUser,
    findUserById,
    findUserByEmail,
    findAllUsers,
    updateUser,
    deleteUser,
} from '../repositories/userRepo.js';

export async function createNewUser(data) {
    return await createUser(data);
}

export async function getUserById(id) {
    return await findUserById(id);
}

export async function getUserByEmail(email) {
    return await findUserByEmail(email);
}

export async function getAllUsers() {
    return await findAllUsers();
}

export async function modifyUser(id, data) {
    return await updateUser(id, data);
}

export async function removeUser(id) {
    return await deleteUser(id);
}