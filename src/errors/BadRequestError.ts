export default class BadRequestError extends Error {
  constructor(errorMsg: string) {
    super(errorMsg);
    this.name = "BadRequestError";
  }
}
