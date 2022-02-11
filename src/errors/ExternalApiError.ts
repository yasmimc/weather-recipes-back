export default class ExternalApiError extends Error {
  constructor(errorMsg: string) {
    super(errorMsg);
    this.name = "ExternalApiError";
  }
}
