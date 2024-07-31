import { database } from "./database/database.js";

export function getAllTodos() {
  const stmt = database.prepare("SELECT * FROM todos");
  const todos = stmt.all();
  return todos;
}

// TODO: add more functions to satisfy the what is needed in the index.js file
