var KEY =
    {
        UP: 38,
        DOWN: 40,
        W: 90,
        S: 83
    }

$(function () {
    // listen to keydown
    $(document).keydown(function (e) {
        console.log(e.which);
        switch (e.which) {
            case KEY.UP: //arrow up
                // get paddleB Y value (int)
                var top = parseInt($("#paddleB").css("top"));
                // move it 20 pixels
                $("#paddleB").css("top", top - 20);
                break;
            case KEY.DOWN: //arrow down
                //get paddleB Y value (int)
                var top = parseInt($("#paddleB").css("top"));
                // move it 20 pixels
                $("#paddleB").css("top", top + 20);
                break;
            case KEY.W:
                //get paddleA Y value (int)
                var top = parseInt($("#paddleA").css("top"));
                // move it 20 pixels
                $("#paddleA").css("top", top - 20);
                break;
            case KEY.S:
                //get paddleA Y value (int)
                var top = parseInt($("#paddleA").css("top"));
                // move it 20 pixels
                $("#paddleA").css("top", top + 20);
                break;

        }
    });
});