import { PrismaClient } from '@prisma/client'

const prisma1 = new PrismaClient()

const createUser = async () => {
  const user = await prisma1.user.create({
    data: {
      email: 'test02@gmail.com',
      name: 'Wu Cheng Huan',
      age: 21
    }
  })

  console.log('Created user : ', user)
}

const prisma2 = new PrismaClient()

const findUser = async () => {
  const user = await prisma2.user.findMany()

  console.log('Find all user : ', user)
}
createUser()
  .then((res: any) => {
    findUser()
      .then()
      .catch((e) => console.log(e.message))
  })
  .catch((error: any) => {
    console.log(error.message)
  })
