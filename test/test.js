var createLoop = require("../src/index");


describe("createLoop(callback, element)", function() {
    describe("#run()", function() {
        it("should start loop", function(done) {
            var loop = createLoop(function() {
                loop.pause();
                done();
            });

            loop.run();
        });
    });
    describe("#pause()", function() {
        it("should pause loop", function(done) {
            var loop = createLoop(function() {
                loop.pause();
                done();
            });

            loop.run();
        });
    });
});
