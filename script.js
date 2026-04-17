function generatePassword() {

}
var chars = "abcdefghijklmnopqrstuvwxyz0123456789";
var password = "";
for (var i = 0; i < 8; i++) {

}
var random = Math.floor(Math.random() * chars.length);
password += chars[random];
document.getElementById("password").innerText = password;
console.log("Password generated");
var length = document.getElementById("length").value;
for (var i = 0; i < length; i++) {

if (document.getElementById("uppercase").checked) {
  chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}
