function fib(n) {
    a = new Array(n);
    if (n == 0) {
        a[0] = 0; 
        return a;
    }
    a[1] = 0;
    if (n == 1) { return a; }
    for (i = 2; i <= n ; i++) {
        a[i] = fibHelp(i - 1) + fibHelp(i - 2);
    }
    return a;
}
function fibHelp(n) {
    if (n == 1) { return 1; }
    else if (n == 0) { return 0; }
    else { return fibHelp(n - 1) + fibHelp(n - 2); }
}
