import { Prisma } from "@prisma/client";
import { prisma } from "../../src/lib/prisma";
import { PetRepository, pets } from "../repositories/petRepository";

export class CreatePetUseCase {
  constructor(private petRepository: PetRepository) {}

  async execute(data: Prisma.PetCreateInput) {
    const pet = await this.petRepository.create(data);

    return { pet };
  }
}
