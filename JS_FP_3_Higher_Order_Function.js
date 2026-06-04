// Umumnya, teknik HOF digunakan untuk berbagai hal berikut.
// - Mengabstraksi fungsi aksi dari sebuah proses asynchronous
// (kita akan belajar asynchronous dalam modul selanjutnya) dalam bentuk callback.
// - Membuat utility function, yaitu fungsi Array.map, Array.filter, Array.reduce, dan sebagainya.
// - Menerapkan teknik matematika, seperti currying dan function composition.

// Misal membuat fungsi apply yang menerima fungsi operation sebagai argumen
// untuk melakukan sebuah operasi pada dua nilai argumen lain.
console.log("-----Apply-----");
function apply(operation, ...args) {
  // kita bisa menambahkan kode lain sebelum operation dijalankan.
  return operation(...args);
}
function sum(a, b, c) {
  return a + b + c;
}
function discount(disc, value) {
  //   return value - ((disc / 100) * value);
  return value * ((100 - disc) / 100);
}
const productPrice = apply(sum, 100, 100, 200);
const withDiscount = apply(discount, 25, productPrice);
console.log("Product price:", productPrice); // Output: Product price: 400
console.log("With discount 25%:", withDiscount); // Output: With discount 25%: 300

// fungsi memoize menerima fungsi pure function sebagai argumen dan menyimpan hasil
// dari pemanggilan pure function untuk digunakan ketika terjadi pemanggilan ulang
// dengan argumen yang sama. Jadi, jika terjadi pemanggilan dengan argumen yang sama,
// cukup mengembalikan nilai dari yang sudah tersimpan.
console.log("-----Memoization-----");
// menerima argumen sebuah fungsi
function memoize(fn) {
  const cache = new Map();
  // mengembalikan nilai berupa fungsi
  return function (...args) {
    const key = JSON.stringify(args);
    // console.log(key);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}
function sumArray(arr) {
  if (arr.length === 0) return 0;
  //   console.log(arr.slice(1));
  return arr[0] + sumArray(arr.slice(1));
}
// console.log(sumArray([1,2]));
const memoizedSumArray = memoize(sumArray);
const largeArray = Array.from({ length: 10 }, (_, i) => i + 1);
console.time("Memoized Sum First Call");
console.log("Total:", memoizedSumArray(largeArray));
console.timeEnd("Memoized Sum First Call");
console.time("Memoized Sum Second Call (Cached)");
console.log("Total:", memoizedSumArray(largeArray));
console.timeEnd("Memoized Sum Second Call (Cached)");

// Dengan teknik currying, sebuah fungsi biasanya tidak mengambil semua argumen secara langsung.
// Ia mengambil satu argumen dulu, lalu mengembalikan sebuah fungsi baru yang menerima argumen kedua,
// begitu seterusnya hingga seluruh argumen dimanfaatkan dan melakukan operasi secara utuh.
console.log("-----Currying-----");
function adjectivfy(adjective) {
  return function (noun) {
    return `${noun} ${adjective}.`;
  };
}
function multipleBy(x) {
  return function (y) {
    return x * y;
  };
}
const coolifier = adjectivfy("keren");
const funnifier = adjectivfy("seru");
const multipleByFive = multipleBy(5);
console.log(coolifier("Dicoding")); // Output: Dicoding keren.
console.log(funnifier("JavaScript")); // Output: JavaScript seru.
console.log(multipleByFive(7)); // Output: 35
console.log(multipleByFive(10)); // Output: 50

// HOF juga bisa digunakan untuk komposisi fungsi, yaitu kita menggabungkan
// beberapa fungsi kecil menjadi satu fungsi yang lebih kompleks.
// Berikut adalah contoh praktik dari komposisi fungsi.
console.log("-----Komposisi Fungsi-----");
function addOne(x) {
  return x + 1;
}
function square(x) {
  return x * x;
}
function compose(f, g) {
  return (x) => {
    return f(g(x));
  };
}
const addOneAndSquare = compose(square, addOne);
console.log(addOneAndSquare(2)); // output: 9

// Beberapa contoh HOF yang umum digunakan dalam JavaScript adalah penggunaan fungsi Array.map.
// Fungsi Array.map menerima sebuah fungsi sebagai argumen yang digunakan untuk memproses
// setiap elemen array. Fungsi Array.map mengembalikan array baru yang hasilnya adalah
// nilai dari pemanggilan fungsi pada setiap elemen array asli.
console.log("-----HOF Map-----");
const numbers = [1, 2, 3, 4];
const multiplyByTwo = (number) => {
  return number * 2;
};
const doubled = numbers.map(multiplyByTwo);
console.log(numbers); // [1, 2, 3, 4]
console.log(doubled); // [2, 4, 6, 8]
