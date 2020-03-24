    var counter = 0;
    var seconds = 0;
    $("#counter span").html(counter);
    $("#timer span").html(seconds);

    $("#start").hide();
    $("#win").hide();
    $("#endScreen").hide();

    $("#startGame").on("mouseover", function() {
    $(this).hide();

    var randWidth = (random = Math.ceil(Math.random() * 350));
    var randHeight = (random = Math.ceil(Math.random() * 350));

    $("#win").show("fast");
    $("#win").css("top", randHeight);
    $("#win").css("left", randWidth);

    window.setInterval(function() {
        seconds = seconds + 1;
        $("#timer span").html(seconds);
    }, 1000);
    });

    $("#start").on("mouseover", function() {
    var randWidth = (random = Math.ceil(Math.random() * 350));
    var randHeight = (random = Math.ceil(Math.random() * 350));

    $("#win").show("fast");
    $("#win").css("top", randHeight);
    $("#win").css("left", randWidth);
    $(this).hide("fast");
    });

    $("#win").on("mouseover", function() {
    counter = counter + 1;
    $("#counter span").html(counter);

    if (counter == 10) {
        $("#endScreen").show("medium");
        $("#endCount").html(counter);
        $("#endSeconds").html(seconds);
    }

    $(this).hide("fast");
    $("#start").show("fast");
    });
