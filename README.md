# random-ascii-password-generator
fastest NPM package/library to generate random and strong password with alphabetical-numerical-ascii characters.


### How to install
npm install `random-ascii-password-generator --save`

### How to use
`const randomPasswordGenerator = require('random-ascii-password-generator');`

### all possible methods

1) both the args, length and uppercase 
`randomPasswordGenerator(10, true);`
Output - "|81SLNDDTN"

2) both the args, length and lowercase
`randomPasswordGenerator(12, false);`
Output - "qmzg^-ryi$+9"

3) no args - default 8 length and uppercase
`randomPasswordGenerator();`
Output - "~V?VUUGV"

4) only password case but have to provide first args as undefined
`randomPasswordGenerator(undefined, false);`
Output - "\l]xa[6n"

5) only password length
`randomPasswordGenerator(5);`
Output - "Y;KYV"

For live demonstration:
https://codepen.io/techygeeky/pen/bGWXdbJ?editors=1011
