function fib(n) {
    let a = [];
    if (n == 0) {
        a[0] = fibHelp(n);
        return a; 
    }
    a = [0, 1];
    if (n == 1) { return a; }
    for (i = n; i > 1; i--) {
        a[i] = fibHelp(i - 1) + fibHelp(i - 2);
    }
    return a;
}

function fibHelp(n) {
    if (n == 1) { return 1; }
    else if (n == 0) { return 0; }
    else { return fibHelp(n - 1) + fibHelp(n - 2); }
}

console.log(fib(7));
