const fs = require('fs')
const utils = require('util')
const {pac_urls, pac_bypass_urls} = require('./urls')
const urls2pac = require('./urls2pac')

;(async function () {
  const content = urls2pac(pac_bypass_urls, pac_urls, "secure.uku.im:8443", 'HTTPS',"secure.uku.im:993", 'HTTPS')
  await utils.promisify(fs.writeFile)('proxy.pac', content, 'utf8')
})()
