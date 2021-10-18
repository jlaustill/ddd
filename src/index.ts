import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function mainAsync() {
  // Connect the client
  await prisma.$connect();

  const posts = await prisma.post.findMany({
    include: {
      comments: true,
    },
  });

  console.dir(posts, { depth: Infinity });
}

mainAsync()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
