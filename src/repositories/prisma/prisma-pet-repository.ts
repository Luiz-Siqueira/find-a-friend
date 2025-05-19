import { Org, Pet, Prisma } from "@prisma/client";
import { prisma } from "../../lib/prisma";
import { PetRepository } from "../petRepository";

export class PrismaPetRepository implements PetRepository {
  async findById(petId: string): Promise<Pet> {
    const pet = await prisma.pet.findFirstOrThrow({
      where: {
        id: petId,
      },
    });

    return pet;
  }
  async findBy(
    city: string,
    isCompanionship?: boolean,
    isPlayful?: boolean
  ): Promise<Pet[]> {
    const where = [];

    if (isCompanionship) {
      where.push({ isCompanionship: isCompanionship });
    }

    if (isPlayful) {
      where.push({ isPlayful: isPlayful });
    }

    const pet = await prisma.pet.findMany({
      where: {
        city: city,
        isPossibleAdopt: true,
        ...(where.length > 0 && { OR: where }),
      },
    });

    return pet;
  }
  async create(data: Prisma.PetCreateInput): Promise<Pet> {
    const pet = await prisma.pet.create({
      data: data,
    });

    return pet;
  }
}
