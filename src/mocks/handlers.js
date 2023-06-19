// src/mocks/handlers.js
import { rest } from "msw";
export const registerUser = [
  rest.post("http://localhost:1111/api/auth/register"),
];
