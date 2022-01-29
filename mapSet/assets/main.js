(function () {
    
}())


console.log('----------------------- MAP -----------------------');

let map = new Map ();
map.set('Leonardo', 'Admin');
map.set('Regiane', 'Operadora');
map.set('Nicolly', 'Admin');
map.set('Daniele', 'Operadora');

map.forEach(function (value, key) {
    if (value == 'Admin') {
        console.log(key)
    }
})

console.log('--------------');

function mapReceive (map) {
    let admins = [];
    for ([key,value] of map) {
        if (value == 'Admin') {
            admins.push(key);
        }
    }
    return console.log(admins);
}

console.log('----------------------- SET -----------------------');

const meuArray = [30,30,40,5,223,2049,3034,5];

function verify (array) {
    const mySet = new Set (array);

    return [...mySet] // Spread syntax
}

console.log(verify(meuArray))