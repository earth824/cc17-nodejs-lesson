const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({ log: ['query'] });

const run = async () => {
  // SELECT (findUnique, findUniqueOrThrow, findFirst, findFirstOrThrow, FindMany)
  // const result = await prisma.account.findUniqueOrThrow({
  //   where: {
  //     ACCOUNT_ID: 500
  //   }
  // });

  // SELECT * FROM product LIMIT 1
  // const result = await prisma.product.findFirst({
  //   where: {
  //     PRODUCT_TYPE_CD: 'LOANOOO'
  //   }
  // });

  // const result = await prisma.department.findMany();

  // SELECT SOME FIELD
  // const result = await prisma.account.findMany({
  //   where: {
  //     OPEN_BRANCH_ID: 1
  //   },
  //   select: {
  //     ACCOUNT_ID: true,
  //     AVAIL_BALANCE: true
  //   }
  // });

  // const result = await prisma.account.findMany({
  //   where: {
  //     AVAIL_BALANCE: {
  //       gt: 5000
  //     }
  //   }
  // });

  // const result = await prisma.account.findMany({
  //   where: {
  //     OPEN_BRANCH_ID: {
  //       in: [1, 2, 3]
  //     }
  //   }
  // });

  // const result = await prisma.individual.findMany({
  //   where: {
  //     FIRST_NAME: {
  //       contains: 'J'
  //     }
  //   }
  // });

  // const result = await prisma.individual.findMany({
  //   where: {
  //     AND: [{ FIRST_NAME: 'James' }, { LAST_NAME: 'Hadley' }]
  //   }
  // });

  // const result = await prisma.account.findFirst({
  //   select: {
  //     ACCOUNT_ID: true,
  //     AVAIL_BALANCE: true,
  //     customer: {
  //       select: {
  //         CUST_ID: true,
  //         ADDRESS: true,
  //         individual: {
  //           select: {
  //             FIRST_NAME: true,
  //             LAST_NAME: true
  //           }
  //         }
  //       }
  //     },
  //     branch: {
  //       select: {
  //         CITY: true
  //       }
  //     }
  //   }
  // });

  // const result = await prisma.account.findMany({
  //   orderBy: {
  //     AVAIL_BALANCE: 'desc'
  //   },
  //   take: 2,
  //   skip: 5
  // });

  // const result = await prisma.account.aggregate({
  //   _sum: {
  //     AVAIL_BALANCE: true
  //   },
  //   _count: {
  //     CUST_ID: true
  //   }
  // });

  const result = await prisma.$queryRaw`
    SELECT i.CUST_ID AS CUST_ID, i.FIRST_NAME AS FIRST_NAME, i.LAST_NAME AS LAST_NAME, SUM(a.AVAIL_BALANCE) AS TOTAL 
    FROM individual i INNER JOIN account a ON i.CUST_ID = a.CUST_ID GROUP BY i.CUST_ID
    ORDER BY TOTAL DESC LIMIT 5
    `;

  console.log(result);
};

run();
