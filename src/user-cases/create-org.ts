import { Prisma } from "@prisma/client";
import { prisma } from "../../src/lib/prisma";
import { PetRepository, pets } from "../repositories/petRepository";
import { OrgRepository } from "@/repositories/orgRepository";

export class CreateOrgUseCase {
  constructor(private orgRepository: OrgRepository) {}

  async execute(data: Prisma.OrgCreateInput) {
    const org = await this.orgRepository.create(data);

    return { org };
  }
}
