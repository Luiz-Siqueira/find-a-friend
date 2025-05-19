import { randomUUID } from "node:crypto";
import { Org, Prisma } from "@prisma/client";
import { OrgRepository } from "../orgRepository";

export class inMemoryOrgRespository implements OrgRepository {
  findByEmail(email: string): Promise<Org | null> {
    throw new Error("Method not implemented.");
  }
  findOrgByDog(petId: string): Promise<Org> {
    throw new Error("Method not implemented.");
  }
  public items: Org[] = [];

  async create(data: Prisma.OrgCreateInput): Promise<Org> {
    const org: Org = {
      id: randomUUID(),
      email: data.email,
      password: data.password,
      name: data.name,
      adress: data.adress,
      WhatsApp: data.WhatsApp,
      role: data.role || "ADMIN",
    };

    this.items.push(org);

    return org;
  }
}
