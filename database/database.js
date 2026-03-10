import * as SQLite from 'expo-sqlite';

export async function createTables() {
    const db = SQLite.openDatabaseSync('database.db')

    await db.execAsync(`
        CREATE TABLE IF NOT EXISTS questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            question TEXT NOT NULL,
            answers TEXT NOT NULL,
            correct_answer INTEGER NOT NULL
        );`
    );

    await db.execAsync(`
        INSERT INTO questions (question, answers, correct_answer) VALUES
            (' Qual é o maior planeta do sistema solar? ', ' Terra/Marte/Júpiter/Vênus ', 2),
            (' Qual é o país com a maior população do mundo? ', ' Índia/China/Estados Unidos/Indonésia ', 1),
            (' Quem pintou a Mona Lisa? ', ' Van Gogh/Pablo Picasso/Leonardo da Vinci/Michelangelo ', 2),
            (' Qual é o elemento químico representado por O? ', ' Ouro/Oxigênio/Osmio/Hidrogênio ', 1),
            (' Quantos continentes existem na Terra? ', ' 5/6/7/8 ', 2),
            (' Qual é a capital da França? ', ' Roma/Madrid/Paris/Berlim ', 2),
            (' Qual planeta é conhecido como planeta vermelho? ', ' Marte/Júpiter/Mercúrio/Saturno ', 0),
            (' Quem escreveu Dom Quixote? ', ' Machado de Assis/Miguel de Cervantes/Pablo Neruda/Gabriel García Márquez ', 1),
            (' Qual é o maior oceano da Terra? ', ' Atlântico/Pacífico/Índico/Ártico ', 1),
            (' Quanto é 9 x 8? ', ' 72/64/81/69 ', 0),
            (' Qual é o animal terrestre mais rápido? ', ' Leão/Guepardo/Tigre/Gazela ', 1),
            (' Em que ano o homem pisou na Lua pela primeira vez? ', ' 1965/1969/1972/1959 ', 1),
            (' Qual é o idioma mais falado no mundo? ', ' Inglês/Mandarim/Espanhol/Hindi ', 1),
            (' Qual é o metal mais abundante na crosta terrestre? ', ' Ferro/Alumínio/Cobre/Ouro ', 1),
            (' Qual é o menor país do mundo? ', ' Mônaco/Nauru/Vaticano/San Marino ', 2),
            (' Quem descobriu o Brasil em 1500? ', ' Pedro Álvares Cabral/Cristóvão Colombo/Vasco da Gama/Fernão de Magalhães ', 0),
            (' Qual é a capital do Japão? ', ' Pequim/Tóquio/Seul/Bangkok ', 1),
            (' Qual é o resultado de 15 + 27? ', ' 40/42/41/43 ', 1),
            (' Qual gás as plantas absorvem da atmosfera? ', ' Oxigênio/Nitrogênio/Dióxido de carbono/Hélio ', 2),
            (' Qual é o maior animal do planeta? ', ' Elefante/Azul Baleia/Tubarão Branco/Girafa ', 1),
            (' Quantos lados tem um hexágono? ', ' 5/6/7/8 ', 1),
            (' Quem foi o primeiro presidente do Brasil? ', ' Getúlio Vargas/Deodoro da Fonseca/Juscelino Kubitschek/Dom Pedro II ', 1),
            (' Qual é o rio mais longo do mundo? ', ' Amazonas/Nilo/Mississippi/Yangtze ', 1),
            (' Qual planeta tem anéis visíveis? ', ' Vênus/Marte/Saturno/Mercúrio ', 2),
            (' Qual é a moeda oficial do Japão? ', ' Yuan/Won/Iene/Dólar ', 2),
            (' Quem escreveu Harry Potter? ', ' J. R. R. Tolkien/J. K. Rowling/George R. R. Martin/Stephen King ', 1),
            (' Qual é o maior deserto do mundo? ', ' Saara/Gobi/Antártida/Kalahari ', 2),
            (' Quantos minutos tem uma hora? ', ' 50/60/70/80 ', 1),
            (' Qual é o osso mais longo do corpo humano? ', ' Tíbia/Fêmur/Úmero/Rádio ', 1),
            (' Qual linguagem é mais usada para estilizar páginas web? ', ' HTML/CSS/Python/C++ ', 1);
    `);
    return db;
}