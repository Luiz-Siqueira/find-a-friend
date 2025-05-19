import { InvalidCredentialsErrors } from "./errors/invalid-credentials-errors";
import { compare } from "bcryptjs";
import { Org } from "@prisma/client";
import { OrgRepository } from "@/repositories/orgRepository";

interface AuthenticateUserCaseRequest {
  email: string;
  password: string;
}

interface AuthenticateUserCaseResponse {
  org: Org;
}

export class AuthenticateUserCase {
  constructor(private orgsRepository: OrgRepository) {}

  async execute({
    email,
    password,
  }: AuthenticateUserCaseRequest): Promise<AuthenticateUserCaseResponse> {
    const org = await this.orgsRepository.findByEmail(email);

    if (!org) {
      throw new InvalidCredentialsErrors();
    }

    const doesPassWordMatches = await compare(password, org.password);

    if (!doesPassWordMatches) {
      throw new InvalidCredentialsErrors();
    }

    return { org };
  }
}
