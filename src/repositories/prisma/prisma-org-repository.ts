import { Org, Pet, Prisma } from "@prisma/client";
import { prisma } from "../../lib/prisma";
import { OrgRepository } from "../orgRepository";

export class PrismaOrgRepository implements OrgRepository {
  async findByEmail(email: string): Promise<Org | null> {
    const org = await prisma.org.findFirst({
      where: {
        email,
      },
    });

    return org;
  }
  async findOrgByDog(petId: string): Promise<Org> {
    const pet = await prisma.pet.findUnique({
      where: {
        id: petId,
      },
    });

    const org = await prisma.org.findFirstOrThrow({
      where: {
        id: pet?.orgId,
      },
    });

    return org;
  }
  async create(data: Prisma.OrgCreateInput): Promise<Org> {
    const pet = await prisma.org.create({
      data: data,
    });

    return pet;
  }
}
