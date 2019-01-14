var music = (function () {
    return {
        init: function () {
            this.music_btn = $('.music_btn');
            this.audio = $('audio');
            this.event();
        },
        event: function () {
            var _this = this;
            this.music_btn.on('click', function () {
                music.music_btn.toggleClass('on');
                if(music.music_btn.hasClass('on')){
                    music.audio[0].play();
                }else{
                    music.audio[0].pause();
                }
            });
        }
    }
}());
music.init();