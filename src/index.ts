import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function mainAsync() {
  // Connect the client
  await prisma.$connect();
  // ... you will write your Prisma Client queries here
  // await prisma.user.create({
  //   data: {
  //     name: 'Rich',
  //     email: 'hello@prisma.com',
  //     posts: {
  //       create: {
  //         title: 'My first post',
  //         body: 'Lots of really interesting stuff',
  //         slug: 'my-first-post',
  //       },
  //     },
  //   },
  // });

  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
  // eslint-disable-next-line no-console
  console.dir(allUsers, { depth: null });
}

mainAsync()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
