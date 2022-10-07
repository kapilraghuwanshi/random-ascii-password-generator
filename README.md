# random-ascii-password-generator
fastest NPM package/library to generate random and strong password with alphabetical-numerical-ascii characters.


HOW TO INSTALL
npm install `random-ascii-password-generator` --save

HOW TO USE
`const randomPasswordGenterator = require('random-ascii-password-generator');`

METHODS

1) both the args, length and uppercase
randomPasswordGenterator(10, true);
Output - "|81SLNDDTN"

1) both the args, length and lowercase
randomPasswordGenterator(12, false);
Output - "qmzg^-ryi$+9"

1) no args - default 8 length and uppercase
randomPasswordGenterator();
Output - "~V?VUUGV"

1) only password case but have to provide first args as undefined
randomPasswordGenterator(undefined, false);
Output - "\l]xa[6n"

5) only password length
randomPasswordGenterator(5);
Output - "Y;KYV"

For live demonstration:
https://codepen.io/techygeeky/pen/bGWXdbJ?editors=1011
