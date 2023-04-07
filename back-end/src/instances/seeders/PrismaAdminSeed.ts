import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';



const data = {
  name: "admin",
  email: "admin@gmail.com",
  password: "admin",
  admin: true,
  image: null,
}

const prisma  = new PrismaClient();

export const addAdminUser = async () => {
  const admin = await prisma.user.findUnique({
    where: {
      email: "admin@gmail.com"
    }
  })
  
  if(!admin) {
    data.password = await hash(data.password, 10)
    await prisma.user.create({data})
  }
}

