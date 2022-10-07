const randomPasswordGenterator = require('../index').randomPasswordGenterator;
const assert = require('chai').assert;

describe("Should generate random ascii char password", () => {
  it("should generate uppercase and length=10 password", () => {
    assert.isNotNull(randomPasswordGenterator(10, true), "FB$S;O3YT");
  });
  it("should generate lowercase and length=12 password", () => {
    assert.exists(randomPasswordGenterator(12, false), "fb$s;o.xv2df");
  });
  it("should generate password with default 8 length and uppercase", () => {
    assert.isNotNull(randomPasswordGenterator(), "FB$S;OL#");
  });
  it("should generate password with default 8 length and lowercase", () => {
    assert.exists(randomPasswordGenterator(false), "fb$so2xv");
  });
  it("should generate length=10 password and default uppercase", () => {
    assert.exists(randomPasswordGenterator(10), "FB$S;O3YT");
  });
});
