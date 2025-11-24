import prisma from '../config/db.js';

export async function createUser(data) {
    return await prisma.user.create({
        data,
        select: {
            id: true,
            displayName: true,
            email: true,
        },
    });
}

export async function findUserById(id) {
    return await prisma.user.findUnique({
        where: { id },
        select: {
            id: true,
            displayName: true,
            email: true,
        },
    });
}

export async function findUserByEmail(email) {
    return await prisma.user.findUnique({
        where: { email },
        select: {
            id: true,
            displayName: true,
            email: true,
        },
    });
}

export async function findAllUsers() {
    return await prisma.user.findMany({
        select: {
            id: true,
            displayName: true,
            email: true,
        },
    });
}

export async function updateUser(id, data) {
    return await prisma.user.update({
        where: { id },
        data,
        select: {
            id: true,
            displayName: true,
            email: true,
        },
    });
}

export async function deleteUser(id) {
    return await prisma.user.delete({
        where: { id },
    });
}