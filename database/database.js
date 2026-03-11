import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('database.db');

export async function createTables() {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            question TEXT NOT NULL,
            answers TEXT NOT NULL,
            correct_answer TEXT NOT NULL
        );
    `);
}

export async function insertQuestionsIfNotExists() {
    const questions = await selectQuestions();
    if (questions.length > 0) return;

    const data = [
        [ ' Qual e o maior planeta do sistema solar? ', ' Terra/Marte/Jupiter/Venus ', '2' ],
        [ ' Qual e o pais com a maior populacao do mundo? ', ' India/China/Estados Unidos/Indonesia ', '1' ],
        [ ' Quem pintou a Mona Lisa? ', ' Van Gogh/Pablo Picasso/Leonardo da Vinci/Michelangelo ', '2' ],
        [ ' Qual e o elemento quimico representado por O? ', ' Ouro/Oxigenio/Osmio/Hidrogenio ', '1' ],
        [ ' Quantos continentes existem na Terra? ', ' 5/6/7/8 ', '2' ],
        [ ' Qual e a capital da Franca? ', ' Roma/Madrid/Paris/Berlim ', '2' ],
        [ ' Qual planeta e conhecido como planeta vermelho? ', ' Marte/Jupiter/Mercurio/Saturno ', '0' ],
        [ ' Quem escreveu Dom Quixote? ', ' Machado de Assis/Miguel de Cervantes/Pablo Neruda/Gabriel Garcia Marquez ', '1' ],
        [ ' Qual e o maior oceano da Terra? ', ' Atlantico/Pacifico/Indico/Artico ', '1' ],
        [ ' Quanto e 9 x 8? ', ' 72/64/81/69 ', '0' ],
        [ ' Qual e o animal terrestre mais rapido? ', ' Leao/Guepardo/Tigre/Gazela ', '1' ],
        [ ' Em que ano o homem pisou na Lua pela primeira vez? ', ' 1965/1969/1972/1959 ', '1' ],
        [ ' Qual e o idioma mais falado no mundo? ', ' Ingles/Mandarim/Espanhol/Hindi ', '1' ],
        [ ' Qual e o metal mais abundante na crosta terrestre? ', ' Ferro/Aluminio/Cobre/Ouro ', '1' ],
        [ ' Qual e o menor pais do mundo? ', ' Monaco/Nauru/Vaticano/San Marino ', '2' ],
        [ ' Quem descobriu o Brasil em 1500? ', ' Pedro Alvares Cabral/Cristovao Colombo/Vasco da Gama/Fernao de Magalhaes ', '0' ],
        [ ' Qual e a capital do Japao? ', ' Pequim/Toquio/Seul/Bangkok ', '1' ],
        [ ' Qual e o resultado de 15 + 27? ', ' 40/42/41/43 ', '1' ],
        [ ' Qual gas as plantas absorvem da atmosfera? ', ' Oxigenio/Nitrogenio/Dioxido de carbono/Helio ', '2' ],
        [ ' Qual e o maior animal do planeta? ', ' Elefante/Baleia Azul/Tubarao Branco/Girafa ', '1' ],
        [ ' Quantos lados tem um hexagono? ', ' 5/6/7/8 ', '1' ],
        [ ' Quem foi o primeiro presidente do Brasil? ', ' Getulio Vargas/Deodoro da Fonseca/Juscelino Kubitschek/Dom Pedro II ', '1' ],
        [ ' Qual e o rio mais longo do mundo? ', ' Amazonas/Nilo/Mississippi/Yangtze ', '1' ],
        [ ' Qual planeta tem aneis visiveis? ', ' Venus/Marte/Saturno/Mercurio ', '2' ],
        [ ' Qual e a moeda oficial do Japao? ', ' Yuan/Won/Iene/Dolar ', '2' ],
        [ ' Quem escreveu Harry Potter? ', ' J. R. R. Tolkien/J. K. Rowling/George R. R. Martin/Stephen King ', '1' ],
        [ ' Qual e o maior deserto do mundo? ', ' Saara/Gobi/Antartida/Kalahari ', '2' ],
        [ ' Quantos minutos tem uma hora? ', ' 50/60/70/80 ', '1' ],
        [ ' Qual e o osso mais longo do corpo humano? ', ' Tibia/Femur/Umero/Radio ', '1' ],
        [ ' Qual linguagem e mais usada para estilizar paginas web? ', ' HTML/CSS/Python/C++ ', '1' ]
    ];

    for (const [question, answers, correct_answer] of data) {
        db.runSync(
            `INSERT INTO questions (question, answers, correct_answer) VALUES (?, ?, ?);`,
            [question, answers, correct_answer],
        );
    }
}

export async function selectQuestions() {
    const result = await db.getAllAsync("SELECT * FROM questions;");
    return result;
}