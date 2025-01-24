import { type SQLiteDatabase } from "expo-sqlite";
import * as SQLite from "expo-sqlite";
import { tables } from "./tables";

const dbName = "vendas";

const createTables = async (db: SQLiteDatabase) => {
  for (const table of tables) {
    const { query, name } = table;
    console.log("Criando tabela:", name);
    await db.execAsync(query);
  }
};

const deleteTables = async (db: SQLiteDatabase) => {
  for (const table of tables) {
    const { name } = table;
    console.log("Deletando tabela:", name);
    await db.execAsync(`DROP TABLE IF EXISTS ${name};`);
  }
};

export { createTables, deleteTables, dbName };
