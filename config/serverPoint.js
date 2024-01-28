import serverCredential from "./serverCredential.json";

export const server = pointServer();

function pointServer() {
  // return serverCredential.staging.STAGING_SERVER_HOST;

  return serverCredential.server.SERVER_HOST;
}
