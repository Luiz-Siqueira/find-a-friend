import { Prisma } from "@prisma/client";
import { prisma } from "../lib/prisma";
import { PetRepository, pets } from "../repositories/petRepository";
import { OrgRepository } from "@/repositories/orgRepository";

interface findOrgByPetUseCaseRequest {
  petId: string;
}

export class findOrgByPetUseCase {
  constructor(private orgRepository: OrgRepository) {}

  async execute({ petId }: findOrgByPetUseCaseRequest) {
    const org = await this.orgRepository.findOrgByDog(petId);

    return { org };
  }
}
