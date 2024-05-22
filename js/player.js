class Player {
    constructor() {
        if (Player.instance) return Player.instance;
        return this.getInstance(...arguments);
    }
    getInstance() {
        let instance = new PlayerCreator(...arguments);
        Player.instance = instance;
        return instance;
    }
}
class Musics {
    constructor() {
        this.songs = [{
                id: 1,
                title: 'Its My Life - Bon Jovi',
                singer: '当年网吧盗版CS背景音乐',
                songUrl: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaWNJLXpINndhOWFrMnRHaTJzQjVhM29ZM0tUP2U9U0lvS2hm.mp3',
            },
            {
                id: 2,
				title: 'Nemo - Nightwish',
                singer: 'T姐经典',
                songUrl: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaWNJLXpINndhOWFrMnhmYldtZWd5a3B0SE94P2U9cVRrdjZh.mp3',
            },
            {
                id: 3,
                title: 'Last Breath - Norther',
                singer: 'Gameking经典bgm',
                songUrl: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaWNJLXpINndhOWFrMmxIS091T2c1c2ZyalRXP2U9M1BzaXI5.mp3',
            },
            {
                id: 4,
                title: 'Numb - Link Park',
                singer: '2006年第48届格莱美',
                songUrl: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaWNJLXpINndhOWFrMjNraDc2NWNZUjV4QXF5P2U9RnllbnI0.mp3',
            },
            {
                id: 5,
                title: 'Beyond the game - Alout',
                singer: 'WCG主题曲',
                songUrl: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaWNJLXpINndhOWFrMjRpNWgtUm5YWXo1bGlrP2U9SGJ6MFBv.mp3',
            },
            {
                id: 6,
                title: '金达莱花 - 战歌',
                singer: '屠城、奥山、野战PVP专属BGM',
                songUrl: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaWNJLXpINndhOWFrMjhuTzBETjRITnVSMEpjP2U9QVpVMGtI.mp3',
            },
            {
                id: 7,
                title: 'Bye Bye Beautiful - Nightwish',
                singer: 'A姐经典',
                songUrl: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaWNJLXpINndhOWFrM0I3eDRvT2pNWk9fNnZtP2U9NFpJWEJS.mp3',
            },
            {
                id: 8,
                title: 'Andy - 阿杜',
                singer: '想到我们的过去，都让人感慨，希望所有好朋友都能站起来',
                songUrl: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaWNJLXpINndhOWFrM0V4NUNUczFRSjNKdzVBP2U9ZE1FQkg2.mp3',
            }
        ]
    }
    getSongByNum(index) {
        return this.songs[index];
    }
}
class PlayerCreator {
    constructor() {
        this.audio = document.querySelector('.music-player__audio')
        this.audio.volume = 0.5;
        //工具
        this.util = new Util();
        this.musics = new Musics(); //歌曲信息
        this.song_index = 0; // 当前播放的歌曲索引
        this.loop_mode = 0; // 1 2
        // 下方歌曲列表容器
        this.song_list = $('.music__list_content');

        this.render_doms = { //切换歌曲时需要渲染的dom组
            title: $('.music__info--title'),
            singer: $('.music__info--singer')
        }
        this.ban_dom = {
            control__btn: $('.control__volume--icon')
        }
        this.render_time = {
            now: $('.nowTime'),
            total: $('.totalTime')
        }
        this.init();
    }
    init() {
        this.renderSongList();
        this.renderSongStyle();
        this.bindEventListener();
    }
    //生成播放列表
    renderSongList() {
        let _str = '';
        this.musics.songs.forEach((song, i) => {
            _str += `<li class="music__list__item">${song.title}</li>`
        });
        this.song_list.html(_str);
    }

    //根据歌曲去渲染视图
    renderSongStyle() {
        let {
            title,
            singer,
            songUrl,
        } = this.musics.getSongByNum(this.song_index);
        this.audio.src = songUrl;
        this.render_doms.title.html(title);
        this.render_doms.singer.html(singer);
        this.song_list.find('.music__list__item').eq(this.song_index).addClass('play').siblings().removeClass('play');
    }
    bindEventListener() {
        this.$play = new Btns('.player-control__btn--play', {
            click: this.handlePlayAndPause.bind(this)
        });
        this.$prev = new Btns('.player-control__btn--prev', {
            click: this.changeSong.bind(this, 'prev')
        });
        this.$next = new Btns('.player-control__btn--next', {
            click: this.changeSong.bind(this, 'next')
        });
        this.$mode = new Btns('.player-control__btn--mode', {
            click: this.changePlayMode.bind(this)
        });
        this.$ban = new Btns('.control__volume--icon', {
            click: this.banNotes.bind(this)
        })
        //列表点击
        this.song_list.on('click', 'li', (e) => {
            let index = $(e.target).index();
            this.changeSong(index);
        })
        new Progress('.control__volume--progress', {
            min: 0,
            max: 1,
            value: this.audio.volume,
            handler: (value) => {
                this.audio.volume = value;
            }
        })
        this.audio.oncanplay = () => {
            if (this.progress) {
                this.progress.max = this.audio.duration;
                this.render_time.total.html(this.util.formatTime(this.audio.duration));
                return false;
            };
            this.progress = new Progress('.player__song--progress', {
                min: 0,
                max: this.audio.duration,
                value: 0,
                handler: (value) => {
                    this.audio.currentTime = value;
                }
            })
            this.render_time.total.html(this.util.formatTime(this.audio.duration));
        }
        this.audio.ontimeupdate = () => {
            this.progress.setValue(this.audio.currentTime);
            this.render_time.now.html(this.util.formatTime(this.audio.currentTime));
        }
        this.audio.onended = () => {
            this.changeSong('next');
            this.audio.play();
        }

    }
    handlePlayAndPause() {
        let _o_i = this.$play.$el.find('i');
        if (this.audio.paused) {
            this.audio.play();
            _o_i.removeClass('icon-play').addClass('icon-pause');
            this.disc.image.addClass('play');
            this.disc.pointer.addClass('play')
        } else {
            this.audio.pause();
            _o_i.addClass('icon-play').removeClass('icon-pause');
            this.disc.image.removeClass('play');
            this.disc.pointer.removeClass('play');
        }
    }
    changePlayMode() {
        this.loop_mode++;
        if (this.loop_mode > 2) this.loop_mode = 0;
        this.renderPlayMode();
    }
    renderPlayMode() {
        let _classess = ['random', 'loop', 'single'];
        let _o_i = this.$mode.$el.find('i');
        _o_i.prop('class', 'iconfont icon-' + _classess[this.loop_mode])
    }
    changeSongIndex(type) {
        if (typeof type === 'number') {
            this.song_index = type;
        } else {
            if (this.loop_mode === 0) {
                let _length = this.musics.songs.length;
                let _random = Math.floor(Math.random() * _length);
                for (let i = 0; i < 10000; i++) {
                    if (this.song_index == _random) {
                        _random = Math.floor(Math.random() * _length);
                    } else {
                        this.song_index = _random;
                        break;
                    }
                }
            } else if (this.loop_mode === 1) {
                this.song_index += type === 'next' ? 1 : -1;
                if (this.song_index > this.musics.songs.length - 1) this.song_index = 0;
                if (this.song_index < 0) this.song_index = this.musics.songs.length - 1;
            } else if (this.loop_mode === 2) {
                this.song_index = this.song_index;
            }
        }
    }
    songTime() {
        let totalMinute = parseInt(this.audio.duration / 60) < 10 ? "0" + parseInt(this.audio.duration / 60) : parseInt(this.audio.duration / 60);
        let totalSecond = parseInt(this.audio.duration % 60) < 10 ? "0" + parseInt(this.audio.duration % 60) : parseInt(this.audio.duration % 60);
        $('.totalTime').text(totalMinute + ':' + totalSecond);
    }
    changeSong(type) {
        this.changeSongIndex(type);
        let _is_pause = this.audio.paused;
        this.renderSongStyle();
        if (!_is_pause) this.audio.play();
    }
    banNotes() {
        let _o_i = this.$ban.$el.find("i");
        if (this.audio.muted == true) {
            this.audio.muted = false;
            _o_i.removeClass('icon-muted').addClass('icon-volume');
        } else {
            this.audio.muted = true;
            _o_i.removeClass('icon-volume').addClass('icon-muted');
        }
    }
}
class Progress {
    constructor(selector, options) {
        $.extend(this, options);
        ///给this挂载传入的参数
        this.$el = $(selector);
        this.width = this.$el.width();
        this.init();
    }
    init() {
        this.renderBackAndPointer();
        this.drag();
        this.value;
        this.changeDOMStyle(this.width * this.value);
    }
    renderBackAndPointer() {
        this.$back = $('<div class="back">');
        this.$pointer = $('<div class="pointer">');

        this.$el.append(this.$back);
        this.$el.append(this.$pointer);
    }
    setValue(value) {
        let _distance = this.width * value / (this.max - this.min);
        this.changeDOMStyle(_distance);
    }
    drag() {
        let ele = this.$pointer;
        let father = this.$el;
        let flag = false;
        ele.mousedown((e) => {
            flag = true;
            let mousePos = {
                x: e.offsetX
            }
            $(document).mousemove((e) => {
                if (flag === true) {
                    let _left = e.clientX - father.offset().left - mousePos.x;
                    let _distance = Math.max(0, Math.min(_left, father.outerWidth(false) - ele.outerWidth(false)))
                    let _ratio = _distance / father.outerWidth(false);
                    let _value = _ratio * (this.max - this.min);
                    this.changeDOMStyle(_distance);
                    this.handler(_value);
                }
            })
        })
        $(document).mouseup(() => {
            flag = false;
        })
    }
    bindEvents() {
        this.$el.click((e) => {
            let _x = e.offsetX;
            let _ratio = _x / this.width;
            let _value = _ratio * (this.max - this.min);
            this.changeDOMStyle(_x);
            this.handler(_value);
        })
    }
    changeDOMStyle(distance) {
        this.$back.width(distance + 7 == 7 ? 0 : distance + 7);
        this.$pointer.css('left', distance + 'px');
    }
}
class Btns {
    constructor(selector, handlers) {
        this.$el = $(selector);
        this.bindEvents(handlers);
    }
    bindEvents(handlers) {
        for (const event in handlers) {
            if (handlers.hasOwnProperty(event)) {
                this.$el.on(event, handlers[event]);
            }
        }
    }
}
new Player();