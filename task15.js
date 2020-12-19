let x = "значение";

const f = () => {
    let x = "другое значение";
    return x;
}

console.log(x);  // "значение"
console.log(f());  // "другое значение"