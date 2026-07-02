let n = 10;
let sum = 0;

for (let i = 1; i <= n; i++) {
    let oldsum = sum   
    sum = sum + i;        
    console.log("SUM OF no 1 to N = ",oldsum, "+", i, "=", sum);  
}
console.log("Final: 1 TO",  "N =", sum);