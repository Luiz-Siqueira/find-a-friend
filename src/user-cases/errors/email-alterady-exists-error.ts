export class EmailAlreadyExistsError extends Error {
  constructor() {
    super("Email ja cadastrado");
  }
}
