$(document).ready(function() {
    // interate over array of channels
    var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "habathcx", "storbeck", "RobotCaleb", "noobs2ninjas", "comster404"];
    for (var i = 0; i < channels.length; i++) {
        displayChannel(channels[i]);
    };

    function displayChannel(name) {
        var streamInfo = "https://wind-bow.gomix.me/twitch-api/streams/" + name;
        var channelInfo = "https://wind-bow.gomix.me/twitch-api/channels/" + name;
        var userInfo = "https://wind-bow.gomix.me/twitch-api/users/" + name;

        //Get next stream in iteration
        $.ajax({
            type: "GET",
            url: streamInfo,
            dataType: "jsonp",
            success: getStream
        });

        function getStream(data) {
            $.ajax({
                type: "GET",
                url: channelInfo,
                dataType: "jsonp",
                success: getChannelUrl
            });

            function getChannelUrl(dataUrl) {
                var channel = dataUrl.url;

                if (data.stream !== null) {
                    var online = "",
                        name = data.stream.channel.display_name,
                        logo = data.stream.channel.logo,
                        game = data.stream.channel.game;
                    online += "<div class='users'>";
                    online += "<div class='box'>";
                    online += "<img class='onimg' src=" + logo + "></div>";
                    online += "<div class='box'>";
                    online += "<a target='_blank' href=" + channel + ">";
                    online += "<h2>" + name + " streamInfo " + game + "</h2>";
                    online += "</a>"
                    online += "<p class='blue'>Live</p></div>";
                    online += "<br class='clear'>";
                    $("#online").append(online);
                } else {
                    console.log("Offline")
                }
            } //end getChannelUrl
        } //end getStream

    } //end displayChannel

})

// link to my streams followed api 
// https://api.twitch.tv/kraken/streams/followed?client_id=jilo2hp2yj8vklw98wf962rzcvbpmz

/*
{
    "_total": 4,
    "streams": [{
            "_id": 25674805312,
            "game": "Creative",
            "viewers": 219,
            "video_height": 1080,
            "average_fps": 33,
            "delay": 0,
            "created_at": "2017-07-05T13:14:16Z",
            "is_playlist": false,
            "stream_type": "live",
            "preview": { "small": "https://static-cdn.jtvnw.net/previews-ttv/live_user_food-80x45.jpg", "medium": "https://static-cdn.jtvnw.net/previews-ttv/live_user_food-320x180.jpg", "large": "https://static-cdn.jtvnw.net/previews-ttv/live_user_food-640x360.jpg", "template": "https://static-cdn.jtvnw.net/previews-ttv/live_user_food-{width}x{height}.jpg" },
            "channel": { "mature": false, "partner": true, "status": "24/7 Food shows!", "broadcaster_language": "en", "display_name": "Food", "game": "Creative", "language": "en", "_id": 112866535, "name": "food", "created_at": "2016-01-16T00:29:36Z", "updated_at": "2017-07-06T14:34:32Z", "delay": null, "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/food-profile_image-0a2c3ed2f8d119ea-300x300.png", "banner": null, "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/food-channel_offline_image-b3bf3c0f92f62484-1920x1080.png", "background": null, "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/food-profile_banner-396aee5101d22746-480.jpeg", "profile_banner_background_color": "", "url": "https://www.twitch.tv/food", "views": 9509281, "followers": 94429, "_links": { "self": "https://api.twitch.tv/kraken/channels/food", "follows": "https://api.twitch.tv/kraken/channels/food/follows", "commercial": "https://api.twitch.tv/kraken/channels/food/commercial", "stream_key": "https://api.twitch.tv/kraken/channels/food/stream_key", "chat": "https://api.twitch.tv/kraken/chat/food", "features": "https://api.twitch.tv/kraken/channels/food/features", "subscriptions": "https://api.twitch.tv/kraken/channels/food/subscriptions", "editors": "https://api.twitch.tv/kraken/channels/food/editors", "teams": "https://api.twitch.tv/kraken/channels/food/teams", "videos": "https://api.twitch.tv/kraken/channels/food/videos" } },
            "_links": {
                "self": "https://api.twitch.tv/kraken/streams/food"
            }
        }
    }
}
*/
