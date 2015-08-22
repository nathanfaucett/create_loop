var isNull = require("is_null"),
    requestAnimationFrame = require("request_animation_frame");


module.exports = function createLoop(callback, element) {
    var id = null,
        running = false;

    function request() {
        id = requestAnimationFrame(run, element);
    }

    function run(ms) {

        callback(ms);

        if (running) {
            request();
        }
    }

    return {
        run: function() {
            if (running === false) {
                running = true;
                request();
            }
        },
        pause: function() {
            running = false;

            if (!isNull(id)) {
                requestAnimationFrame.cancel(id);
                id = null;
            }
        },
        setCallback: function(value) {
            callback = value;
        },
        setElement: function(value) {
            element = value;
        },
        isRunning: function() {
            return running;
        },
        isPaused: function() {
            return !running;
        }
    };
};
