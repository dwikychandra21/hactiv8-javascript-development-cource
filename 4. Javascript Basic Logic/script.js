// 
// function tampilkan() {
//     console.log('hello');
// }

// tampilkan();

// // 
// function munculkanAngkaDua() {
//     return 2;
// }

// var tampung = munculkanAngkaDua();
// console.log(tampung);

// // 
// function tambahDua(angka) {
//     return angka + 2;
// }

// var tambahDua = tambahDua(5);
// console.log(tambahDua);

// 
// function tampilkanAngka(param1, param2) {
//     return param1 + param2;
// }

// var tampilkan = tampilkanAngka(5, 7);
// var tampilkan2 = tampilkanAngka(3, 2);
// console.log({tampilkan, tampilkan2});

// Inisialisasi nilai default
// function tampilkanAngka(angka = 1) {
//     return angka;
// }

// var tampilkan = tampilkanAngka();
// var tampilkan2 = tampilkanAngka(4);
// console.log(tampilkan);
// console.log(tampilkan2);


// with Variabel
// var fungsiPenambahan = function(angka1, angka2) {
//     return angka1 + angka2;
// }

// console.log(fungsiPenambahan(6, 5));

// ========================== Array ==========================

// var arr = ['Paus', 'Hiu', 'Cupang'];

// arr.pop();

// arr.push('Piranha');

// arr.slice(0, 2);

// arr.unshift('Lohan');

// console.log(arr);

// arr.shift(arr);

// console.log(arr);

// arr.sort();
// console.log(arr);

// var arrNum = [9, 8, 5, 6, 2, 1];

// arrNum.sort(function(a, b) {
//     return a - b;
// })

// console.log(arrNum);

// const sliceArrNum = arrNum.slice(0, 2);
// console.log(sliceArrNum);

// var arr2 = ["laptop", "buku", "komputer"];
// arr2.splice(0, 2, "Macbook");
// console.log(arr2);

// var kalimat = "saya adalah full-stack javascript programmer!";
// var kata = kalimat.split(" "); 
// console.log(kata); 

// ========================== Object ==========================

var obj = {
    name: 'Dwiky',
    hobby: ['coding', 'reading', {
        sports: ['bulutangkis', 'sepakbola']
    }],
    noHP: '',
    email: 'dwikychandra21@gmail.com',
    address: {
        street: 'jln Raya Sading No.21',
        zipCode: 80351
    },
}

console.log(obj.hobby[2].sports[1]);
obj.noHP = "085737573551";
console.log(obj);








