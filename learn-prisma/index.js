const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const run = async () => {
  // INSERT INTO user (username, password) VALUES ('john', '123456')
  // await prisma.user.create({
  //   data: {
  //     username: 'jack',
  //     password: '123456',
  //     sex: 'MALE'
  //   }
  // });

  // CREATE (create, createMany)
  // await prisma.todo.create({
  //   data: {
  //     title: 'Meeting',
  //     remark: 'lalalalalalalala',
  //     userId: 1
  //   }
  // });

  // const result = await prisma.todo.create({
  //   data: {
  //     title: 'Shopping',
  //     remark: '',
  //     user: {
  //       create: {
  //         username: 'jim',
  //         password: '654321'
  //       }
  //     }
  //   }
  // });

  // const result = await prisma.user.create({
  //   data: {
  //     username: 'jane',
  //     password: '111111',
  //     todos: {
  //       create: [
  //         { title: 'Swimming', remark: '' },
  //         { title: 'Golf', remark: '' },
  //         { title: 'Dinner', remark: '' }
  //       ]
  //     }
  //   }
  // });

  // const result = await prisma.todo.create({
  //   data: {
  //     title: 'Final Exam',
  //     remark: '',
  //     user: {
  //       connect: { username: 'john' }
  //     }
  //   }
  // });

  // const result = await prisma.todo.create({
  //   data: {
  //     title: 'Learnign Prisma',
  //     remark: '',
  //     userId: 3
  //   },
  //   include: {
  //     user: true
  //   }
  // });

  // UPDATE (update, updateMany)
  // UPDATE users SET password = '11111111222', gender = 'FEMALE' WHERE id = 1
  // const result = await prisma.user.updateMany({
  //   data: {
  //     password: '11111111222',
  //     gender: 'FEMALE'
  //   },
  //   where: {
  //     password: '123456'
  //   }
  // });

  // DELETE (delete, deleteMany)
  // const result = await prisma.todo.delete({
  //   where: {
  //     id: 'c4828284-8603-478f-b0af-1300022922ad'
  //   }
  // });

  console.log(result);
};

run();
