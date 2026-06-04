// Rekursi adalah teknik sebuah fungsi memanggil dirinya sendiri sehingga
// operasi dalam fungsi tersebut terus berulang sampai mencapai kondisi tertentu untuk
// ia keluar dari perulangannya.
function generateArray(n) {
  if (n <= 0) {
    return [];
  }
  return [...generateArray(n - 1), n];
}
console.log(generateArray(5)); // Output: [0, 1, 2, 3, 4, 5]
