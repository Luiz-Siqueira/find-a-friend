import { Prisma } from "@prisma/client";
import { prisma } from "../../src/lib/prisma";
import { PetRepository, pets } from "../repositories/petRepository";

interface findByIdUseCaseRequest {
  petId: string;
}

export class findByIdUseCase {
  constructor(private petRepository: PetRepository) {}

  async execute({ petId }: findByIdUseCaseRequest) {
    const pet = await this.petRepository.findById(petId);

    return { pet };
  }
}
