// document ready
// $(document).ready(function () {
//     console.log('ready');
// });

// smooth scroll
$('a[href*="#"]').on("click", function(e) {
    e.preventDefault();

    $("html, body").animate(
        {
        scrollTop: $($(this).attr("href")).offset().top
        },
        500,
        "linear"
    );
});

// fade in on scroll
$(document).ready(function() {
    $(window).scroll(function() {
        $(".fadeIn").each(function(i) {
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if (bottom_of_window > bottom_of_element) {
            $(this).animate({ opacity: "1" }, 500);
        }
        });
    });
});

// my typed.js customization
$(function() {
    $(".headerH2").typed({
        strings: [
            "... ^1500",
        "I'm a Front-End Web Developer! ^1000",
        "I'm Currently Looking For Work! ^1000",
        "Thanks for Stopping By! ^1000",
        "Front-End Web Developer"
        ],
        typeSpeed: 0,
        showCursor: true,
        backSpeed: 30,
        smartBackspace: true
    });
    });

    // I'm including the Type.js Library here.

    // Typed.js | Copyright (c) 2014 Matt Boldt | www.mattboldt.com
    // https://github.com/mattboldt/typed.js
    !(function(t) {
    "use strict";
    var s = function(s, e) {
        (this.el = t(s)),
        (this.options = t.extend({}, t.fn.typed.defaults, e)),
        (this.isInput = this.el.is("input")),
        (this.attr = this.options.attr),
        (this.showCursor = this.isInput ? !1 : this.options.showCursor),
        (this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text()),
        (this.contentType = this.options.contentType),
        (this.typeSpeed = this.options.typeSpeed),
        (this.startDelay = this.options.startDelay),
        (this.backSpeed = this.options.backSpeed),
        (this.backDelay = this.options.backDelay),
        (this.stringsElement = this.options.stringsElement),
        (this.strings = this.options.strings),
        (this.strPos = 0),
        (this.arrayPos = 0),
        (this.stopNum = 0),
        (this.loop = this.options.loop),
        (this.loopCount = this.options.loopCount),
        (this.curLoop = 0),
        (this.stop = !1),
        (this.cursorChar = this.options.cursorChar),
        (this.shuffle = this.options.shuffle),
        (this.sequence = []),
        this.build();
    };
    (s.prototype = {
        constructor: s,
        init: function() {
        var t = this;
        t.timeout = setTimeout(function() {
            for (var s = 0; s < t.strings.length; ++s) t.sequence[s] = s;
            t.shuffle && (t.sequence = t.shuffleArray(t.sequence)),
            t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos);
        }, t.startDelay);
        },
        build: function() {
        var s = this;
        if (
            (this.showCursor === !0 &&
            ((this.cursor = t(
                '<span class="typed-cursor">' + this.cursorChar + "</span>"
            )),
            this.el.after(this.cursor)),
            this.stringsElement)
        ) {
            (s.strings = []), this.stringsElement.hide();
            var e = this.stringsElement.find("p");
            t.each(e, function(e, i) {
            s.strings.push(t(i).html());
            });
        }
        this.init();
        },
        typewrite: function(t, s) {
        if (this.stop !== !0) {
            var e = Math.round(70 * Math.random()) + this.typeSpeed,
            i = this;
            i.timeout = setTimeout(function() {
            var e = 0,
                r = t.substr(s);
            if ("^" === r.charAt(0)) {
                var o = 1;
                /^\^\d+/.test(r) &&
                ((r = /\d+/.exec(r)[0]), (o += r.length), (e = parseInt(r))),
                (t = t.substring(0, s) + t.substring(s + o));
            }
            if ("html" === i.contentType) {
                var n = t.substr(s).charAt(0);
                if ("<" === n || "&" === n) {
                var a = "",
                    h = "";
                for (h = "<" === n ? ">" : ";"; t.substr(s).charAt(0) !== h; )
                    (a += t.substr(s).charAt(0)), s++;
                s++, (a += h);
                }
            }
            i.timeout = setTimeout(function() {
                if (s === t.length) {
                if (
                    (i.options.onStringTyped(i.arrayPos),
                    i.arrayPos === i.strings.length - 1 &&
                    (i.options.callback(),
                    i.curLoop++,
                    i.loop === !1 || i.curLoop === i.loopCount))
                )
                    return;
                i.timeout = setTimeout(function() {
                    i.backspace(t, s);
                }, i.backDelay);
                } else {
                0 === s && i.options.preStringTyped(i.arrayPos);
                var e = t.substr(0, s + 1);
                i.attr
                    ? i.el.attr(i.attr, e)
                    : i.isInput
                    ? i.el.val(e)
                    : "html" === i.contentType
                    ? i.el.html(e)
                    : i.el.text(e),
                    s++,
                    i.typewrite(t, s);
                }
            }, e);
            }, e);
        }
        },
        backspace: function(t, s) {
        if (this.stop !== !0) {
            var e = Math.round(70 * Math.random()) + this.backSpeed,
            i = this;
            i.timeout = setTimeout(function() {
            if ("html" === i.contentType && ">" === t.substr(s).charAt(0)) {
                for (var e = ""; "<" !== t.substr(s).charAt(0); )
                (e -= t.substr(s).charAt(0)), s--;
                s--, (e += "<");
            }
            var r = t.substr(0, s);
            i.attr
                ? i.el.attr(i.attr, r)
                : i.isInput
                ? i.el.val(r)
                : "html" === i.contentType
                ? i.el.html(r)
                : i.el.text(r),
                s > i.stopNum
                ? (s--, i.backspace(t, s))
                : s <= i.stopNum &&
                    (i.arrayPos++,
                    i.arrayPos === i.strings.length
                    ? ((i.arrayPos = 0),
                        i.shuffle && (i.sequence = i.shuffleArray(i.sequence)),
                        i.init())
                    : i.typewrite(i.strings[i.sequence[i.arrayPos]], s));
            }, e);
        }
        },
        shuffleArray: function(t) {
        var s,
            e,
            i = t.length;
        if (i)
            for (; --i; )
            (e = Math.floor(Math.random() * (i + 1))),
                (s = t[e]),
                (t[e] = t[i]),
                (t[i] = s);
        return t;
        },
        reset: function() {
        var t = this;
        clearInterval(t.timeout);
        var s = this.el.attr("id");
        this.el.after('<span id="' + s + '"/>'),
            this.el.remove(),
            "undefined" != typeof this.cursor && this.cursor.remove(),
            t.options.resetCallback();
        }
    }),
        (t.fn.typed = function(e) {
        return this.each(function() {
            var i = t(this),
            r = i.data("typed"),
            o = "object" == typeof e && e;
            r || i.data("typed", (r = new s(this, o))),
            "string" == typeof e && r[e]();
        });
        }),
        (t.fn.typed.defaults = {
        strings: [
            "These are the default values...",
            "You know what you should do?",
            "Use your own!",
            "Have a great day!"
        ],
        stringsElement: null,
        typeSpeed: 0,
        startDelay: 0,
        backSpeed: 0,
        shuffle: !1,
        backDelay: 500,
        loop: !1,
        loopCount: !1,
        showCursor: !0,
        cursorChar: "|",
        attr: null,
        contentType: "html",
        callback: function() {},
        preStringTyped: function() {},
        onStringTyped: function() {},
        resetCallback: function() {}
        });
    })(window.jQuery);
// end Typed.js

// konami game
    $(function() {
    function set(key, value) {
        localStorage.setItem(key, value);
    }
    function get(key) {
        return localStorage.getItem(key);
    }
    function increase(el) {
        set(el, parseInt(get(el)) + 1);
    }
    function decrease(el) {
        set(el, parseInt(get(el)) - 1);
    }

    var toTime = function(nr) {
        if (nr == "-:-") return nr;
        else {
        var n = " " + nr / 1000 + " ";
        return n.substr(0, n.length - 1) + "s";
        }
    };

    function updateStats() {
        $("#stats").html(
        '<div class="padded"><h2>Figures: <span>' +
        "<b>" +
        get("flip_won") +
        "</b><i>Won</i>" +
        "<b>" +
        get("flip_lost") +
        "</b><i>Lost</i>" +
        "<b>" +
        get("flip_abandoned") +
        "</b><i>Abandoned</i></span></h2>" +
        "<ul><li><b>Best Casual:</b> <span>" +
        toTime(get("flip_casual")) +
        "</span></li>" +
        "<li><b>Best Medium:</b> <span>" +
        toTime(get("flip_medium")) +
        "</span></li>" +
        "<li><b>Best Hard:</b> <span>" +
        toTime(get("flip_hard")) +
        "</span></li></ul>" +
        "<ul><li><b>Total Flips:</b> <span>" +
        parseInt(
          (parseInt(get("flip_matched")) + parseInt(get("flip_wrong"))) * 2
        ) +
        "</span></li>" +
        "<li><b>Matched Flips:</b> <span>" +
        get("flip_matched") +
        "</span></li>" +
        "<li><b>Wrong Flips:</b> <span>" +
        get("flip_wrong") +
        "</span></li></ul></div>"
    );
    }

    function shuffle(array) {
        var currentIndex = array.length,
        temporaryValue,
        randomIndex;
        while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
        }
        return array;
    }

    function startScreen(text) {
        $("#g")
        .removeAttr("class")
        .empty();
        $(".logo").fadeIn(250);

        $(".c1").text(text.substring(0, 1));
        $(".c2").text(text.substring(1, 2));
        $(".c3").text(text.substring(2, 3));
        $(".c4").text(text.substring(3, 4));

        // If won game
        if (text == "nice") {
        increase("flip_won");
        decrease("flip_abandoned");
        }

        // If lost game
        else if (text == "fail") {
        increase("flip_lost");
        decrease("flip_abandoned");
        }

        // Update stats
        updateStats();
    }

    /* LOAD GAME ACTIONS */

    // Init localStorage
    if (!get("flip_won") && !get("flip_lost") && !get("flip_abandoned")) {
        //Overall Game stats
        set("flip_won", 0);
        set("flip_lost", 0);
        set("flip_abandoned", 0);
        //Best times
        set("flip_casual", "-:-");
        set("flip_medium", "-:-");
        set("flip_hard", "-:-");
        //Cards stats
        set("flip_matched", 0);
        set("flip_wrong", 0);
    }

    // Fill stats
    if (
        get("flip_won") > 0 ||
        get("flip_lost") > 0 ||
        get("flip_abandoned") > 0
    ) {
        updateStats();
    }

    // Toggle start screen cards
    $('.logo .card:not(".twist")').on("click", function(e) {
        $(this)
        .toggleClass("active")
        .siblings()
        .not(".twist")
        .removeClass("active");
        if ($(e.target).is(".playnow")) {
        $(".logo .card")
            .last()
            .addClass("active");
        }
    });

    // Start game
    $(".play").on("click", function() {
        increase("flip_abandoned");
        $(".info").fadeOut();

        var difficulty = "",
        timer = 1000,
        level = $(this).data("level");

        // Set game timer and difficulty
        if (level == 8) {
        difficulty = "casual";
        timer *= level * 4;
        } else if (level == 18) {
        difficulty = "medium";
        timer *= level * 5;
        } else if (level == 32) {
        difficulty = "hard";
        timer *= level * 6;
        }

        $("#g").addClass(difficulty);

        $(".logo").fadeOut(250, function() {
        var startGame = $.now(),
            obj = [];

        // Create and add shuffled cards to game
        for (i = 0; i < level; i++) {
            obj.push(i);
        }

        var shu = shuffle($.merge(obj, obj)),
            cardSize = 100 / Math.sqrt(shu.length);

        for (i = 0; i < shu.length; i++) {
            var code = shu[i];
            if (code < 10) code = "0" + code;
            if (code == 30) code = 10;
            if (code == 31) code = 21;
            $(
            '<div class="card" style="width:' +
                cardSize +
                "%;height:" +
                cardSize +
                '%;">' +
                '<div class="flipper"><div class="f"></div><div class="b" data-f="&#xf0' +
                code +
                ';"></div></div>' +
                "</div>"
            ).appendTo("#g");
        }

        // Set card actions
        $("#g .card").on({
            mousedown: function() {
            if ($("#g").attr("data-paused") == 1) {
                return;
            }
            var data = $(this)
                .addClass("active")
                .find(".b")
                .attr("data-f");

            if ($("#g").find(".card.active").length > 1) {
                setTimeout(function() {
                var thisCard = $("#g .active .b[data-f=" + data + "]");

                if (thisCard.length > 1) {
                    thisCard
                    .parents(".card")
                    .toggleClass("active card found")
                    .empty(); //yey
                    increase("flip_matched");

                    // Win game
                    if (!$("#g .card").length) {
                    var time = $.now() - startGame;
                    if (
                        get("flip_" + difficulty) == "-:-" ||
                        get("flip_" + difficulty) > time
                    ) {
                        set("flip_" + difficulty, time); // increase best score
                    }

                    startScreen("nice");
                    }
                } else {
                    $("#g .card.active").removeClass("active"); // fail
                    increase("flip_wrong");
                }
                }, 401);
            }
            }
        });

        // Add timer bar
        $('<i class="timer"></i>')
            .prependTo("#g")
            .css({
            animation: "timer " + timer + "ms linear"
            })
            .one(
            "webkitAnimationEnd oanimationend msAnimationEnd animationend",
            function(e) {
                startScreen("fail"); // fail game
            }
            );

        // Set keyboard (p)ause and [esc] actions
        $(window)
            .off()
            .on("keyup", function(e) {
            // Pause game. (p)
            if (e.keyCode == 80) {
                if ($("#g").attr("data-paused") == 1) {
                //was paused, now resume
                $("#g").attr("data-paused", "0");
                $(".timer").css("animation-play-state", "running");
                $(".pause").remove();
                } else {
                $("#g").attr("data-paused", "1");
                $(".timer").css("animation-play-state", "paused");
                $('<div class="pause"></div>').appendTo("body");
                }
            }
            // Abandon game. (ESC)
            if (e.keyCode == 27) {
                startScreen("flip");
                // If game was paused
                if ($("#g").attr("data-paused") == 1) {
                $("#g").attr("data-paused", "0");
                $(".pause").remove();
                }
                $(window).off();
            }
            });
        });
    });
});


// Konami Code
var global = {
    konami: function() {
    var konamikeys = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
        started = false,
        count = 0;

    $(document).keydown(function(e) {
        var reset = function() {
            started = false;
            count = 0;
            return;
        };

        key = e.keyCode;

      // Begin watching if first key in sequence was pressed.
        if (!started) {
            if (key == 38) {
            started = true;
            }
        }

      // If we've started, pay attention to key presses, looking for right sequence.
        if (started) {
            if (konamikeys[count] == key) {
            count++;
            } else {
            // Incorrect key, restart.
            reset();
            }
            if (count == 10) {
            // Success!
            alert("Konami code entered!");
            document.load('/game.html')
            reset();
            }
        } else {
            reset();
        }
        });
    }
};

global.konami();