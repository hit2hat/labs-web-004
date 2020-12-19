const symbol = 'а';
const strs = [
    "дапшцугьрфмцоьсарцф",
    "фрсаьапгкщшгукьрпм",
    "кпшщьукрпгрукпгрцусицшуисцу"
];

console.log(strs.reduce((a, x) => a + (x.match(new RegExp(symbol, 'g')) || []).length, 0));  // 4
