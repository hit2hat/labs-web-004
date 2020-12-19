const f = (x) => {
    return (x * x) + (x * x * x) - 3 * x;
};

const step = 3;
const min = 0;
const max = 100;

for (let x = min; x <= max; x += step) {
    console.log(`f(${x}) = ${f(x)}`);
}