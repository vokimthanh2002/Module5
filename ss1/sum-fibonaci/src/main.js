function fibonacci(n) {
    var fib = [0, 1];
    for (var i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}
function sumFibonacci(n) {
    var fib = fibonacci(n);
    return fib.reduce(function (a, b) { return a + b; }, 0);
}
console.log(fibonacci(15)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
console.log(sumFibonacci(15)); // 143
