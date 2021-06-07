var a = [2];
var n = 2;
while (n <= 100) {
    var numcheck = true;
    for (var i = 0; i < a.length; i++) {
        if (n % a[i] === 0) {
            numcheck = false;
        }
    }
    if (numcheck === true) {
        a.push(n);
    }
    n++;
}
console.log(a);






