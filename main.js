 let b = prompt("Enter tovar");
 let a = b.split(",");

let c = 0;
for(let n  of a) {
    let d = n.split("-");
    pri = parseInt(d[1]);
    c += pri;
}
console.log(c);