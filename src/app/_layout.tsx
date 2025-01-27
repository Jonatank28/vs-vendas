import React from "react";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SQLiteProvider } from 'expo-sqlite';
import { createTables, deleteTables, dbName } from "../utils/createTables";
import * as SQLite from 'expo-sqlite';
import "../../global.css";
import { enableScreens } from "react-native-screens";
enableScreens

const RootLayout = () => {
  const onInit = async () => {
    const db = await SQLite.openDatabaseAsync(`${dbName}`);
    await deleteTables(db);
    await createTables(db);

  };
  return (
    <SQLiteProvider databaseName={`${dbName}.db`} onInit={onInit}>
      <StatusBar style="dark" />
      <Slot />
    </SQLiteProvider>
  );
};

export default RootLayout;