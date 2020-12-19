const a = 1;
const b = 2;
const c = 3;

let d = (b * b) - (4 * a * c);
if (d < 0) {
    console.log(`no roots`);
} else {
    if (d === 0) {
        console.log(`Single root: x = ${(-1 * b) / (2 * a)}`);
    } else {
        console.log(`Two roots:`);
        console.log(`x1 = ${((-1 * b) - Math.sqrt(d)) / (2 * a)}`);
        console.log(`x2 = ${((-1 * b) + Math.sqrt(d)) / (2 * a)}`);
    }
}