import * as SQLite from 'expo-sqlite';

export async function loadData() {
    const db = SQLite.openDatabaseSync('database.db')

    const result = await db.execAsync(`
        SELECT * FROM questions;
    `);

    return result;
}