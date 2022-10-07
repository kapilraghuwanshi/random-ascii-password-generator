export default function randomPasswordGenterator(pwdLength, isUppercase) {
  const ascii =
    "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
  let password = "";
  for (let i = 0; i < pwdLength; i++) {
    password += ascii[Math.floor(ascii.length * Math.random())];
  }
  return isUppercase ? password.toUpperCase() : password.toLowerCase();
}