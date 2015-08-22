var tape = require("tape"),
    createLoop = require("..");


tape("createLoop(callback, element)", function(assert) {
    var loop = createLoop(function() {

        assert.equal(loop.isRunning(), true);

        loop.pause();

        assert.equal(loop.isPaused(), true);

        assert.end();
    }, global.document);

    loop.run();
});
