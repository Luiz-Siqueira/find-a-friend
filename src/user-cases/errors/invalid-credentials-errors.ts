export class InvalidCredentialsErrors extends Error {
  constructor() {
    super("Email ou senha incorretos");
  }
}
