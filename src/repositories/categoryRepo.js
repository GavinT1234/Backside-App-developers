import prisma from '../config/db.js';

export async function createCategory(data) {
    return await prisma.category.create({
        data,
        select: {
            id: true,
            name: true,
        },
    });
}

export async function findCategoryById(id) {
    return await prisma.category.findUnique({
        where: { id },
        select: {
            id: true,
            name: true,
        },
    });
}

export async function findAllCategories() {
    return await prisma.category.findMany({
        select: {
            id: true,
            name: true,
        },
    });
}

export async function updateCategory(id, data) {
    return await prisma.category.update({
        where: { id },
        data,
        select: {
            id: true,
            name: true,
        },
    });
}

export async function deleteCategory(id) {
    return await prisma.category.delete({
        where: { id },
    });
}