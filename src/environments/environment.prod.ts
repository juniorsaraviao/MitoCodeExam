import { commonEnvironment } from "./environment.common";

const env: Partial<typeof commonEnvironment> = {
  production: true,
  host: "http://192.168.1.111:45455/swagger/index.html",
};

export const environment = { ...commonEnvironment, ...env };
