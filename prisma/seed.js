import { PrismaClient } from "../src/generated/prisma/index.js";
const prisma = new PrismaClient();

async function main() {
  //create users
  const user1 = await prisma.user.create({
    data: {
      displayName: "Admin Test",
      email: "admin@test.com",
      password: "123456",
    },
  });

  const user2 = await prisma.user.create({
    data: {
      displayName: "Regular User",
      email: "user@test.com",
      password: "123456",
    },
  });

  //categories
  const category1 = await prisma.category.create({
    data: {
      name: "Games",
    },
  });

  const category2 = await prisma.category.create({
    data: {
      name: "Collectibles",
    },
  });

  //items
  const item1 = await prisma.item.create({
    data: {
      title: "Nintendo Switch",
      price: 250,
      categoryId: category1.id,
      userId: user1.id,
    },
  });

  const item2 = await prisma.item.create({
    data: {
      title: "Funko Pop - Tanjiro",
      price: 20,
      categoryId: category2.id,
      userId: user2.id,
    },
  });

  //offers
  await prisma.offer.create({
    data: {
      amount: 200,
      type: "purchase",
      status: "pending",
      itemId: item1.id,
      userId: user2.id,
    },
  });

  await prisma.offer.create({
    data: {
      amount: 15,
      type: "trade",
      status: "accepted",
      itemId: item2.id,
      userId: user1.id,
    },
  });
}

main()
  .catch((error) => {
    console.error("Seeding error: ", error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
