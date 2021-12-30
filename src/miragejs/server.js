import { Server } from "miragejs";
import factories from "./factories";
import fixtures from "./fixtures";
import routes from "./routes";
import models from "./models";
import seeds from "./seeds";

const config = environment => {
  const configSets = {
    environment,
    factories,
    models,
    routes,
    seeds,
  };

  if (Object.keys(fixtures).length) {
    configSets.fixtures = fixtures;
  }

  return configSets;
};

export function makeServer({ environment = "development" } = {}) {
  return new Server(config(environment));
}
