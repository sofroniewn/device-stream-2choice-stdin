var device = require('./')
var dStream = device.createStream()

dStream.write({blueLED: false, redLED: true})
dStream.on('data', console.log)