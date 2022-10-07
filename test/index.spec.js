const randomPasswordGenerator = require('../index').randomPasswordGenerator;
const assert = require('chai').assert;

describe("Should generate random ascii char password", () => {
  it("should generate uppercase and length=10 password", () => {
    assert.isNotNull(randomPasswordGenerator(10, true), "|81SLNDDTN");
  });
  it("should generate lowercase and length=12 password", () => {
    assert.exists(randomPasswordGenerator(12, false), "qmzg^-ryi$+9");
  });
  it("should generate password with default 8 length and uppercase", () => {
    assert.isNotNull(randomPasswordGenerator(), "~V?VUUGV");
  });
  it("should generate password with default 8 length and lowercase", () => {
    assert.exists(randomPasswordGenerator(undefined, false), "bt@r%bx(");
  });
  it("should generate length=5 password and default uppercase", () => {
    assert.exists(randomPasswordGenerator(5), "@NE9/");
  });
});
