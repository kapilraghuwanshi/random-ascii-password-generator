  /**
   * Generates a random string of given length
   * @param length Length of random string to be generated
   * @param case optional boolean field which can be true/fase
   * @returns Random alpha numeric ascii char sting of given length and case
   */
module.exports.randomPasswordGenerator = (pwdLength = 8, isUppercase = true) => {
    const ascii =
      "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
    let password = "";
    for (let i = 0; i < pwdLength; i++) {
      password += ascii[Math.floor(ascii.length * Math.random())];
    }
    return isUppercase ? password.toUpperCase() : password.toLowerCase();
};
