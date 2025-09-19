import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const repository = {
    findAll: async () => await prisma.user.findMany(),
    findById: async (id: number) => await prisma.user.findUnique({ where: { id } }),
    findUserPoints: async (id: number) => await prisma.point.findMany({ where: { userId: id } }),
    create: async (name: string, password: string) => await prisma.user.create({ data: { name, password } }),
    update: async (id: number, name: string, password: string) => await prisma.user.update({ where: { id }, data: { name, password } }),
    delete: async (id: number) => await prisma.user.delete({ where: { id } })
}
export default repository;