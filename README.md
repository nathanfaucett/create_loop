createLoop
=======

create a loop to manage requestAnimationFrame calls

```javascript
var createLoop = require("@nathanfaucett/create_loop");


function loopHandler(ms) {
    loop.isRunning() === true;
    loop.pause();
    loop.isPaused() === true;
}

var loop = createLoop(loopHandler, document.body);

loop.run();
```
