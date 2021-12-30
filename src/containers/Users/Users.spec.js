/* eslint-disable no-undef */
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { makeServer } from "../../miragejs/server";
import { Users } from "./Users";

describe("Containers/Users", () => {
  // configurando o mirage pra mockar nossas requests
  let server;

  beforeEach(() => {
    server = makeServer({ evnironment: "test" });
  });
  afterEach(() => {
    server.shutdown();
  });

  it("should render and display 3 users", async () => {
    server.createList("user", 3);
    render(<Users />);

    await waitFor(() => {
      // esperando ser renderizado os usuarios
      expect(screen.getAllByTestId("user")).toHaveLength(6); // 6 por que o seeds do mirage já ta interceptando a resquests do users e retornando 3 usuarios
    });
  });
});
