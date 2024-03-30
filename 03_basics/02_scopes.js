let a = 10
const b = 23
var c = 26

if ( true ){
    let a = 20;
    const b = 643
    var c = 234  // var will console even out of scope that's why var ko use nhi krna chahiye
}

console.log(a);
console.log(b);
console.log(c);