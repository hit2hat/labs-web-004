const n = 5;
const a = [];

const rMin = 0;
const rMax = 1000;

for (let i = 0; i < n; i++) {
    a.push(Math.random() * (rMin - rMax) + rMin);
}

console.log(a.reduce((a, x) => a + x * x, 0));