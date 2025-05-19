import { expect, test, describe, it, beforeEach } from "vitest";
import { inMemoryOrgRespository } from "@/repositories/in-memory/in-memory-org-repository";
import { CreateOrgUseCase } from "./create-org";

let OrgRepository: inMemoryOrgRespository;
let createOrgUseCase: CreateOrgUseCase;
describe("Register use case", () => {
  beforeEach(() => {
    OrgRepository = new inMemoryOrgRespository();
    createOrgUseCase = new CreateOrgUseCase(OrgRepository);
  });

  it("should hash pet create", async () => {
    const { org } = await createOrgUseCase.execute({
      name: "teste",
      adress: "teste",
      email: "teste@teste.com",
      password: "123456",
      WhatsApp: "111111111",
    });

    expect(org.id).toEqual(expect.any(String));
  });
});
