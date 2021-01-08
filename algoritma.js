Nomor_1 = 'Node.Js adalah platform untuk menjalankan aplikasi web barbasis JavaScript yang di kenalkan pada tahun 2009. Dengan ini kita daapat menjalankan bahasa JavaScript dari sisi server. JavaScript merupakan salah satu bahsa pemrograman yang bisa membuat website anda lebih menarik serta lebih hidup. Bahasa Pemrograman javascript itu di jalankan di perangkat pengunjung website atau situs, bukan di sisi server. JavaScript terus berkembang yang kemudian javascript di kembangkan untuk bisa berjalan di sisi server (server side).'
console.log(Nomor_1)


console.log('Soal Algoritma Nomor 1')
angka = 1000000
for (let i = 1; i < 8; i++) {
    console.log(i * angka)
    angka = angka / 10
}

console.log('Soal ALgoritma Nomor 2')
const array = [1, 2, 33, 44, 55, 33, 44, 22, 44, 33, 2, 77, 66, 1, 2, 3, 4, 5, 6, 7, 89, 3, 3, 8, 9, 75, 4, 3, 2, 2, 1, 3]
let arraydivision = Math.ceil(array.length / 3)
console.log(`Panjang Array ${arraydivision}`)
var array1 = []
var array2 = []
var array3 = []

for (let i = 0; i < array.length; i++) {
    if (i < arraydivision) {
        array1.push(array[i])
    } else if (i >= arraydivision && i < (arraydivision * 2)) {
        array2.push(array[i])
    } else {
        array3.push(array[i])
    }
}
console.log(array1.sort())
console.log(array2.sort())
console.log(array3.sort())

function totalArray(array) {
    let value = 0
    for (let i = 0; i < array.length; i++) {
        value += array[i]
    }
    return value
}

console.log(`Jumlah Array 1 = ${totalArray(array1)}`)
console.log(`Jumlah Array 2 = ${totalArray(array2)}`)
console.log(`Jumlah Array 3 = ${totalArray(array3)}`)


function meanArray(array) {
    let value = 0
    for (let i = 0; i < array.length; i++) {
        value += array[i]
    }
    value = value / array.length
    return value
}

console.log(`Rata - Rata Array 1 = ${meanArray(array1)}`)
console.log(`Rata - Rata Array 2 = ${meanArray(array2)}`)
console.log(`Rata - Rata Array 3 = ${meanArray(array3)}`)

// console.log(`Nilai Maksimal ${Math.max(array1)} dari Array 1`)
function getMaxArrayValues(array) {
    return Math.max.apply(null, array)
}

function getMinArrayValues(array) {
    return Math.min.apply(null, array)
}

console.log(`Array1 = Nilai Maksimal : ${getMaxArrayValues(array1)} dan Nilai Minimum : ${getMinArrayValues(array1)}`)
console.log(`Array2 = Nilai Maksimal : ${getMaxArrayValues(array2)} dan Nilai Minimum : ${getMinArrayValues(array2)}`)
console.log(`Array3 = Nilai Maksimal : ${getMaxArrayValues(array3)} dan Nilai Minimum : ${getMinArrayValues(array3)}`)

var sentence = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum mi eu magna fermentum, vel luctus tellus semper. Nunc dignissim eleifend ipsum, nec viverra mauris pellentesque non. Fusce auctor ex id mauris egestas, quis luctus nunc pharetra. Sed in dignissim nisi. Aliquam sed tempor urna, nec aliquam mi. Aenean eu feugiat lacus, vel dictum eros. Nulla condimentum porttitor aliquet. Vestibulum vehicula elit non arcu auctor maximus. Quisque est eros, maximus nec diam faucibus, mollis odio.'

var alfabet = 'abcdefghijklmnopqrstuvwxyz'
var alfabet = alfabet.concat(alfabet.toUpperCase())
console.log(alfabet)

function Hitung(sentence, alfabet) {
    var hitung = 0
    for (let i = 0; i < sentence.length; i++) {
        if (sentence.charAt(i) == alfabet) {
            hitung += 1
        }
    }
    console.log(`${alfabet} sebanyak ${hitung}`)
}

for (let i = 0; i < alfabet.length; i++) {
    Hitung(sentence, alfabet.charAt(i))
}





newSentence = []
for (let i = 0; i < sentence.length; i++) {
    newSentence.push(sentence[i])
}
// console.log(newSentence)

function slideCharacter(sentence, alfabet) {
    for (let i = 0; i < sentence.length; i++) {
        for (let j = 0; j < alfabet.length; j++) {
            if (sentence[i] === alfabet.charAt(j)) {
                sentence[i] = alfabet.charAt(j += 5)
            }
        }
    }
    sentence = sentence.join("")
    console.log(sentence)
}

slideCharacter(newSentence, alfabet)


var angka = Math.floor(Math.random() * 100) + 1
console.log(`Angka random ${angka}`)
var hitung = 0
do {
    hitung += 1
}
while (angka !== Math.floor(Math.random() * 100) + 1) {
    hitung += 1
}
console.log(`Sebanyak ${hitung} langkah untuk menemukan angka yang tepat`)