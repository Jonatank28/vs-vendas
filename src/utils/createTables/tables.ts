export const tables = [
  {
    name: "clientes",
    query: `
      PRAGMA journal_mode = 'wal';
      CREATE TABLE IF NOT EXISTS clientes (
        id INTEGER PRIMARY KEY NOT NULL,
        nome TEXT NOT NULL,
        email TEXT NOT NULL,
        telefone TEXT
      );
    `,
  },
  {
    name: "motoristas",
    query: `
      PRAGMA journal_mode = 'wal';
      CREATE TABLE IF NOT EXISTS motoristas (
        id INTEGER PRIMARY KEY NOT NULL,
        nome TEXT NOT NULL,
        cnh TEXT NOT NULL,
        telefone TEXT
      );
    `,
  },
  {
    name: "regioes",
    query: `
      PRAGMA journal_mode = 'wal';
      CREATE TABLE IF NOT EXISTS regioes (
        id INTEGER PRIMARY KEY NOT NULL,
        nome TEXT NOT NULL,
        descricao TEXT
      );
    `,
  },
];
