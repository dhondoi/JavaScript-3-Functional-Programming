// Syarat Pure Function
// - Menghasilkan nilai yang sama setiap kali dipanggil dengan argumen yang sama.
// - Tidak memiliki efek samping yang dapat memengaruhi keadaan di luar fungsi tersebut.

// Impure Function
console.log("-----Impure Function-----");
let value = 0;
function addWith(addingValue) {
  value += addingValue;
  console.log(`Current value is ${value}`);
  return value;
}
const result1 = addWith(1); // Output: Current value is 1
const result2 = addWith(1); // Output: Current value is 2
const result3 = addWith(1); // Output: Current value is 3
console.log(result1, result2, result3); // Output: 1, 2, 3

// Mengubah nilai variabel global
let count = 0;
function increment() {
  count++;
}
// Mengakses waktu sistem
function getCurrentTime() {
  return new Date().toLocaleTimeString();
}
// Mengubah status objek yang diterima sebagai parameter
function updateUser(user) {
  user.name = "Updated Name";
}
// Menulis ke berkas
const fs = require("fs");
function writeToFile(data) {
  fs.writeFileSync("data.txt", data);
}

// Pure Function
console.log("-----Pure Function-----");
function pureAddWith(value, addingValue) {
  return value + addingValue;
}
const pureResult1 = pureAddWith(0, 1);
console.log(`result1 is ${pureResult1}`); // Output: result1 is 1
const pureResult2 = pureAddWith(pureResult1, 1);
console.log(`result2 is ${pureResult2}`); // Output: pureResult2 is 2
const pureResult3 = pureAddWith(pureResult2, 1);
console.log(`result3 is ${pureResult3}`); // Output: pureResult3 is 3
console.log(pureResult1, pureResult2, pureResult3); // Output: 1, 2, 3

// Menghitung total harga pesanan tanpa mengubah input
function calculateTotalPrice(orderItems) {
  return orderItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}
// Memfilter dan memetakan data tanpa mengubah array asli
function getActiveUsernames(users) {
  return users.filter((user) => user.isActive).map((user) => user.username);
}
// Membuat objek baru berdasarkan input tanpa mengubah input asli
function createUserProfile(user, address) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    address: {
      street: address.street,
      city: address.city,
      country: address.country,
    },
  };
}
// Menggabungkan dua objek tanpa mengubah objek asli
function mergeSettings(defaultSettings, userSettings) {
  return {
    ...defaultSettings,
    ...userSettings,
  };
}
