import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient();

export const connect_db = async () => {
    try {
        await prisma.$connect();
    } catch (error) {
        console.error(error);
        throw new Error("Error connecting to the database");
    }
}