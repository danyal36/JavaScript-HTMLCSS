var a={},
    b={key:'b'},
    c={key:'c'};

console.log(typeof b);
console.log(b);
console.log(typeof a);
a[b]=123;
console.log(typeof a[b]);
console.log(a);
a[c]=456;
console.log(a);
console.log(a[b]);