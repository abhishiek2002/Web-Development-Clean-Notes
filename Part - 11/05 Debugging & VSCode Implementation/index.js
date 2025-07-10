function add1(a, b) {
    return a+b+1;
}

function add2(a,b) {
    return a+b+2;
}


function add(a,b) {
    return add1(a,b) + add2(a,b);
}

const ans = add(1,2);
console.log("Result", ans);
