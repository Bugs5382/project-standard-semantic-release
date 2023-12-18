const releaseConfig = require('./index.js')

module.exports = {
    ...releaseConfig,
    "verifyConditions": [
        '@semantic-release/changelog',
       [
           '@semantic-release/npm',
           {
               "access": "public"
           }
       ],
        '@semantic-release/git'
    ]
}