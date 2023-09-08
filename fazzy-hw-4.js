const nilaiRandom = [] //index 100

for (let i = 0; i < 100; i++){
    let randomNilai = Math.floor(Math.random()*50) + 1;
    nilaiRandom.push(randomNilai)
}

const arrayGanjil = [] //index Ganjil
const arrayGenap = [] // index Genap

for (let i = 0; i < nilaiRandom.length; i++){
    if (i % 2 === 0) {
        arrayGenap.push(nilaiRandom[i])
    }else {
        arrayGanjil.push(nilaiRandom[i])
    }
}

// fungsi min
function nilaiMin(angka){
    let min = angka[0]
    for (let i = 1; i < angka.length; i++){
    if(angka[i] < min) {
        min = angka[i]
    }
}
return min
}

// fungsi max
function nilaiMax(angka){
    let max = angka[0]
    for (let i = 1; i < angka.length; i++){
    if(angka[i] > max) {
        max = angka[i]
    }
}
return max
}

// fungsi total
function nilaiTotal(angka){
    let total = 0
    for(let i = 0; i < angka.length; i++){
        total += angka[i]
    }
    return total
}

// fungsi rata-rata
function nilaiAverage(angka){
    let average = 0
    average = nilaiTotal(angka) / angka.length
    return average
}


// Perbandingan nilai array ganjil dengan array genap
    const perMin = nilaiMin(arrayGanjil) < nilaiMin(arrayGenap) ?
    "min lebih besar array Genap" : nilaiMin(arrayGanjil) > nilaiMin(arrayGenap) ?
    "min lebih besar array Ganjil" : "min memiliki nilai sama antara array ganjil dan genap"
    // console.log(perMin);

    const perMax = nilaiMax(arrayGanjil) < nilaiMax(arrayGenap) ?
    "max lebih besar array Genap" : nilaiMax(arrayGanjil) > nilaiMax(arrayGenap) ?
    "max lebih besar array Ganjil" : "max memiliki nilai sama antara array ganjil dan genap"
    // console.log(perMax);
    
    const perTotal = nilaiTotal(arrayGanjil) < nilaiTotal(arrayGenap) ?
    "total lebih besar array Genap" : nilaiTotal(arrayGanjil) > nilaiTotal(arrayGenap) ?
    "total lebih besar array Ganjil" : "total memiliki nilai sama antara array ganjil dan genap"
    // console.log(perTotal);

    const perAvg = nilaiAverage(arrayGanjil) < nilaiAverage(arrayGenap) ?
    "rata-rata lebih besar array Genap" : nilaiAverage(arrayGanjil) > nilaiAverage(arrayGenap) ?
    "rata-rata lebih besar array Ganjil" : "rata-rata memiliki nilai sama antara array ganjil dan genap"
    // console.log(perAvg);

console.log("ini array dengan indeks 100 nilai random (1-50)");
console.log(nilaiRandom)
console.log("ini indeks Genap")
console.log(arrayGenap)
console.log("ini indeks Ganjil")
console.log(arrayGanjil)
console.log("-------------------------------------------------");

console.log("nilai min ganjil = " + nilaiMin(arrayGanjil));
console.log("nilai min genap = " + nilaiMin(arrayGenap));
console.log(perMin);
console.log("-------------------------------------------------");

console.log("nilai max ganjil = " + nilaiMax(arrayGanjil));
console.log("nilai max genap = " + nilaiMax(arrayGenap));
console.log(perMax);
console.log("-------------------------------------------------");

console.log("nilai total ganjil = " + nilaiTotal(arrayGanjil));
console.log("nilai total genap = " + nilaiTotal(arrayGenap));
console.log(perTotal);
console.log("-------------------------------------------------");

console.log("nilai rata-rata ganjil = " + nilaiAverage(arrayGanjil));
console.log("nilai rata-rata genap = " + nilaiAverage(arrayGenap));
console.log(perAvg);
