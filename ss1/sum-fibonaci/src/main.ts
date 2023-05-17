function fibonacci(n: number): number[] {
    const fib: number[] = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib;
}

function sumFibonacci(n: number): number {
    const fib: number[] = fibonacci(n);
    return fib.reduce((a, b) => a + b, 0);
}

console.log(fibonacci(15)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
console.log(sumFibonacci(15)); // 143