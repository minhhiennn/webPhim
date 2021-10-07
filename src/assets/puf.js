
function initPlayer(playlist) {
    var player = jwplayer("mediaplayer");
    player.setup({
        "sources": [
            {
                "file": playlist,
                "type": "hls",
            }
        ],
        playbackRateControls: true,
        skin: {
            name: "tube",
        },
        image: "https://img.phimchill.tv/images/info/squid-game.jpg",

        width: "100%",
        height: "100%",
        volume: 100,
        preload: "auto",
        primary: "html5",
        androidhls: true,
        aspectratio: "16:9",
        autostart: true,
        advertising: {
            client: "vast",
            admessage: "Vui Lòng chờ XX giây",
            skiptext: "Bỏ Qua Ngay",
            skipmessage: "Bỏ ADS sau xxs",
            schedule: {
                "myAds": {
                    "offset": "pre",
                    "tag": "https://phimchill.tv/pm.xml"
                }
            }
        },
    });
    player.addButton("/media/img/forward-10.png", "Next 10s", function () {
        player.seek(player.getPosition() + 10);
    }, "Next 10s");
    player.addButton("/media/img/back-10.png", "Back 10s", function () {
        player.seek(player.getPosition() - 10);
    }, "Back 10s");
    player.on("error", function (message) {
        var element = document.getElementById('mediaplayer');
        element.innerHTML = '<img src="https://i.imgur.com/J9OoJl1.jpg" style="width:100%;height:100%;" />'
    });
    player.on("setupError", function (message) {
        var element = document.getElementById('mediaplayer');
        element.innerHTML = '<img src="https://i.imgur.com/J9OoJl1.jpg" style="width:100%;height:100%;" />'
    });
    player.on("complete", function (e) {
        if (autonext == true) {
            var $elm = $('.episodes li a.active');
            if ($elm.length) {
                var nextEpisode = $elm.closest('li').next().find('a').attr('href');
                if (typeof (nextEpisode) != 'undefined') {
                    location.href = nextEpisode;
                }
            }
        }
    });
}
iniPlayers("83183cfb3ba122d537c2595a26c0f6a6", 2,);
