mocha.setup("bdd");
const { assert } = chai;
import {randomPasswordGenterator} from './index';

describe("Should generate random ascii char password", () => {
  it("should generate uppercase and length=5 password", () => {
    assert.isNotNull(randomPasswordGenterator(5, true), "FB$S;O.");
  });
  it("should generate lowercase and length=8 password", () => {
    assert.exists(randomPasswordGenterator(8, false), "fb$s;o.xv");
  });
});

mocha.run();
