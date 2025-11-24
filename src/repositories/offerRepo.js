import prisma from '../config/db.js';

export async function createOffer(data) {
    return await prisma.offer.create({
        data,
        select: {
            id: true,
            amount: true,
            type: true,
            status: true,
            itemId: true,
            userId: true,
            item: {
                select: {
                    id: true,
                    title: true,
                },
            },
            user: {
                select: {
                    id: true,
                    displayName: true,
                },
            },
        },
    });
}

export async function findOfferById(id) {
    return await prisma.offer.findUnique({
        where: { id },
        select: {
            id: true,
            amount: true,
            type: true,
            status: true,
            itemId: true,
            userId: true,
            item: {
                select: {
                    id: true,
                    title: true,
                },
            },
            user: {
                select: {
                    id: true,
                    displayName: true,
                },
            },
        },
    });
}

export async function findAllOffers() {
    return await prisma.offer.findMany({
        select: {
            id: true,
            amount: true,
            type: true,
            status: true,
            itemId: true,
            userId: true,
            item: {
                select: {
                    id: true,
                    title: true,
                },
            },
            user: {
                select: {
                    id: true,
                    displayName: true,
                },
            },
        },
    });
}

export async function updateOffer(id, data) {
    return await prisma.offer.update({
        where: { id },
        data,
        select: {
            id: true,
            amount: true,
            type: true,
            status: true,
            itemId: true,
            userId: true,
            item: {
                select: {
                    id: true,
                    title: true,
                },
            },
            user: {
                select: {
                    id: true,
                    displayName: true,
                },
            },
        },
    });
}

export async function deleteOffer(id) {
    return await prisma.offer.delete({
        where: { id },
    });
}