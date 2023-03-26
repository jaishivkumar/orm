import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  try {
    const data = [
      { name: 'jaishiv',  lname: 'kumar',userdetail:'urlid', email: 'ja12@gmail.com',  },
      { name: 'Adnan2',   lname :'jacks',userdetail:'urlid',  email: 'ja12@gmail.com', },
    ]

    const user = { name: 'Adnan Halilovic 5', userdetail: 'urlid', email: 'ja12@gmail.com', };

    const res = await prisma.User.create({
      data: user,
    });

    console.log(res);
  } catch (err) {
    console.log(err);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
}

main();
