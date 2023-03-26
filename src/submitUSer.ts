import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  try {
      const data = [
        { name: 'jaishiv',  lname: 'kumar',description: 'Software development trinee', email: 'ja12@gmail.com',  },
        { name: 'Adnan2',   lname :'jacks',description: 'Software development things',  email: 'ja12@gmail.com', },
      ]
  
      const user = { name: 'Adnan Halilovic 5', description: 'Software development things', email: 'ja12@gmail.com', };
  
    

    const res = await prisma.SubmitUser.submit({
      where: {
        id: 9,
      },
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
