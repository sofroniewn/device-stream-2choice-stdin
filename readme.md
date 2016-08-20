# device-stream-2choice-stdin
Stream simultating two buttons and leds from stdin

```
npm install device-stream-2choice-stdin
```

This module simulates a red and blue button, and a red and blue led from stdin. Useful for testing experiment-stream-2choice modules without having any hardware present.


## Usage
`js
var device = require('device-stream-2choice-stdin')
var dStream = device.createStream()

dStream.write({blueLED: false, redLED: true})
dStream.on('data', console.log)
`

## API

#### var dStream = device.createStream()
Create a new duplex stream that produces as its readable component an object `{blueButton: bool, redButton: bool}` where bool is `true` or `false` for the blue and red button depending on whether the last key pressed was a 'b' or 'r'. As its writable component it accepts an object `{blueLED: bool, redLED: bool}`. It will then return an icon to the console if either of those bool valuse are set to `true`.

## Licence
MIT