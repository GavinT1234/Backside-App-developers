import prisma from '../config/db.js';

export async function createItem(data) {
    // Ensure the category exists
    const category = await prisma.category.findUnique({
        where: { id: data.categoryId },
    });

    if (!category) {
        throw new Error(`Category with id ${data.categoryId} does not exist`);
    }

    // Ensure the user exists
    const user = await prisma.user.findUnique({
        where: { id: data.userId },
    });

    if (!user) {
        throw new Error(`User with id ${data.userId} does not exist`);
    }

    // Create the item
    return await prisma.item.create({
        data: {
            title: data.title,
            price: data.price,
            categoryId: data.categoryId,
            userId: data.userId,
        },
        select: {
            id: true,
            title: true,
            price: true,
            categoryId: true,
            userId: true,
        },
    });
}

export async function findItemById(id) {
    return await prisma.item.findUnique({
        where: { id },
        select: {
            id: true,
            title: true, 
            price: true,
            categoryId: true,
            userId: true,
            category: true, 
            user: true,     
        },
    });
}

export async function findAllItems() {
    return await prisma.item.findMany({
        select: {
            id: true,
            title: true, 
            price: true,
            categoryId: true,
            userId: true,
            category: true, 
            user: true,     
        },
    });
}

export async function updateItem(id, data) {
    return await prisma.item.update({
        where: { id },
        data,
        select: {
            id: true,
            title: true, 
            price: true,
            categoryId: true,
            userId: true, 
        },
    });
}

export async function deleteItem(id) {
    return await prisma.item.delete({
        where: { id },
    });
}