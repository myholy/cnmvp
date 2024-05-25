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
                title: 'Beyond the game - Alout',
                singer: 'WCG主题曲',
                songUrl: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaWNJLXpINndhOWFrMjRpNWgtUm5YWXo1bGlrP2U9SGJ6MFBv.mp3',
            },
            {
                id: 2,
				title: 'Nemo - Nightwish',
                singer: 'Tarja Turunen',
                songUrl: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaWNJLXpINndhOWFrMnhmYldtZWd5a3B0SE94P2U9cVRrdjZh.wav',
            },
            {
                id: 3,
                title: 'Last Breath - Norther',
                singer: 'Gameking经典BGM',
                songUrl: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaWNJLXpINndhOWFrMmxIS091T2c1c2ZyalRXP2U9M1BzaXI5.mp3',
            },
            {
                id: 4,
                title: 'Numb - Link Park',
                singer: '2006年第48届格莱美',
                songUrl: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaWNJLXpINndhOWFrMjNraDc2NWNZUjV4QXF5P2U9RnllbnI0.flac',
            },
            {
                id: 5,
				title: 'Its My Life - Bon Jovi',
                singer: '当年网吧盗版CS背景音乐',
                songUrl: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaWNJLXpINndhOWFrMnRHaTJzQjVhM29ZM0tUP2U9U0lvS2hm.wav',
                
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
                singer: 'Anette Olzon',
                songUrl: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaWNJLXpINndhOWFrM0I3eDRvT2pNWk9fNnZtP2U9NFpJWEJS.flac',
            },
            {
                id: 8,
                title: 'Andy - 阿杜',
                singer: '想到我们的过去，都让人感慨，希望所有好朋友都能站起来',
                songUrl: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaWNJLXpINndhOWFrM0V4NUNUczFRSjNKdzVBP2U9ZE1FQkg2.flac',
            },
            {
                id: 9,
                title: 'Nothings Gonna Stop Us Now - Starship',
                singer: '林大爷？',
                songUrl: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaWNJLXpINndhOWFsQjFWRVpoU3NTY2t3bTg2P2U9VlAwQ0hu.wav',
            },
            {
                id: 10,
                title: 'She Is My Sin - Nightwish',
                singer: 'Tarja Turunen',
                songUrl: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaWNJLXpINndhOWFsQnZsS01fUVIwWWwzbTZKP2U9T1V2QXFP.flac',
            },
            {
                id: 11,
                title: '特斯河之赞 - 九宝乐队',
                singer: '重新录制版',
                songUrl: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaWNJLXpINndhOWFsQ0c1dHQ2TFBCTGIxTlVlP2U9RlJGaXJT.flac',
            },
            {
                id: 12,
                title: 'New Boy - 朴树',
                singer: '轻松一下windows98',
                songUrl: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaWNJLXpINndhOWFsQ0N1RmRkUWN1UnhLNTV0P2U9SFJENDQ0.wav',
            },
            {
                id: 13,
                title: 'A New Day Has Come - Céline Dion',
                singer: 'Radio Remix',
                songUrl: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaWNJLXpINndhOWFsRDZvYURNczdvak04dVZoP2U9Z2FXdlZD.flac',
            },
            {
                id: 14,
                title: 'Boulevard Of Broken Dreams - Green Day',
                singer: '2006年第48届格莱美',
                songUrl: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaWNJLXpINndhOWFsQjd6ZG4zYXkxY0NaN3BzP2U9MzdZZWJJ.flac',
            },
            {
                id: 15,
                title: '夜曲 - 周杰伦',
                singer: '夜曲一响,上台领奖',
                songUrl: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaWNJLXpINndhOWFsQndhbllLcWdhSW1JTGlNP2U9WDR5YzRF.flac',
            },
            {
                id: 16,
                title: 'Stronger - Inez',
                singer: '冰河时代',
                songUrl: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaWNJLXpINndhOWFsQ1RxNW5MdWE5OUlzYmZIP2U9d2pRWW1s.flac',
            },
            {
                id: 17,
                title: 'Ymca - Village People',
                singer: 'MAGA?',
                songUrl: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaWNJLXpINndhOWFsQ01Eb2ZhYlN5dU5OUTdVP2U9cWtnNU15.mp3',
            },
            {
                id: 18,
                title: 'Careless Whisper - Wham!',
                singer: '第一支访问中国的西方流行乐队',
                songUrl: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaWNJLXpINndhOWFsQ1k0WmRBTGJiQ3FnRXdfP2U9WHFmZFY2.flac',
            },
            {
                id: 19,
                title: 'Just Blue - Space',
                singer: '大草原又到了动物们交配的季节……',
                songUrl: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaWNJLXpINndhOWFsQ2MyS1ZzdnBfbHJTODI5P2U9WE5ScnpZ.flac',
            },
            {
                id: 20,
                title: 'I Hate Myself For Loving You - Joan Jett',
                singer: 'Up Your Alley',
                songUrl: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaWNJLXpINndhOWFsRHZSc2hrSDdiZUQ0dzNaP2U9ZnpMWExh.flac',
            },
            {
                id: 21,
                title: 'Aloha Heja He - Achim Reichel',
                singer: '加油',
                songUrl: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaWNJLXpINndhOWFsRUFISmVpZXh3TERaQk16P2U9RWRrMDR5.flac',
            },
            {
                id: 22,
                title: 'MY ALL - 浜崎あゆみ',
                singer: '滨崎步',
                songUrl: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaWNJLXpINndhOWFsRFhaWk9LblVMalU4WHpoP2U9T1NUVmtD.mp3',
            },
            {
                id: 23,
                title: 'What Is Love - Haddaway',
                singer: 'Up Your Alley',
                songUrl: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaWNJLXpINndhOWFsQ25kOFVQNm5SVzFKcVJkP2U9Vm96R2tj.mp3',
            },
            {
                id: 24,
                title: 'Dear John - 比莉',
                singer: '你的爱，像是备胎弄的咖啡',
                songUrl: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaWNJLXpINndhOWFsRGpwc2lnRzVmTWtwTlpkP2U9dmJGUU5v.flac',
            },
            {
                id: 25,
                title: 'Days of my past - Rose Wong _ Max Lu',
                singer: '童年',
                songUrl: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaWNJLXpINndhOWFsQ3YxWUF5MEhuQWJnQjdhP2U9TmVwMVpP.mp3',
            },
            {
                id: 26,
                title: 'Love Is Free - Noble',
                singer: '我的未来不是梦',
                songUrl: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaWNJLXpINndhOWFsRGZaSWFxTkpfeDlzX1p4P2U9RFdGMmtp.mp3',
            },
            {
                id: 27,
                title: 'Gone Too Far - Noble',
                singer: '是否我真的一无所有',
                songUrl: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaWNJLXpINndhOWFsRHE4Q2dRUlJOSWFPUTgtP2U9dkRsYnhS.mp3',
            },
            {
                id: 28,
                title: 'betrayal - Jus Allah',
                singer: '黄昏',
                songUrl: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaWNJLXpINndhOWFsQzVrcC1yNmVwSTBMTHNDP2U9MkQyYk9k.mp3',
            },
            {
                id: 29,
                title: 'Casablanca - Bertie Higgins',
                singer: '卡萨布兰卡',
                songUrl: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaWNJLXpINndhOWFsRGxCNm9ZZDhCVXJkdE5xP2U9RkpiUTRW.flac',
            },
            {
                id: 30,
                title: 'DotA - Basshunter',
                singer: 'Radio Edit',
                songUrl: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaWNJLXpINndhOWFsRUhfeVlxeXdNUURzRk5BP2U9dW9UVG1i.flac',
            },
            {
                id: 31,
                title: 'La La Love On My Mind - Ann Winsborn',
                singer: '.',
                songUrl: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaWNJLXpINndhOWFsQ2hnWEJmODl2NVBJamhEP2U9U1VjYm9O.mp3',
            },
            {
                id: 32,
                title: 'Go West - Pet Shop Boys',
                singer: '1992 12 Mix',
                songUrl: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaWNJLXpINndhOWFsQzFmTXJuamM1SDVUYXhqP2U9bmNnaDFH.mp3',
            },
            {
                id: 33,
                title: 'Salt - Ava Max',
                singer: '.',
                songUrl: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaWNJLXpINndhOWFsREJ4Wmgtam9RLXZndDY4P2U9cG9VNHEx.mp3',
            },
            {
                id: 34,
                title: '无地自容 - 黑豹乐队',
                singer: '.',
                songUrl: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaWNJLXpINndhOWFsRVBaV1B2WHhTWTdnYjI2P2U9cWc4THFi.flac',
            },
            {
                id: 35,
                title: 'Hey Oh - Tragédie',
                singer: '.',
                songUrl: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaWNJLXpINndhOWFsREtvNmxBV3Q0YzE2WGo3P2U9RHNkYkVz.mp3',
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
        this.util = new Util();
        this.musics = new Musics();
        this.song_index = 0;
        this.loop_mode = 0;
        this.song_list = $('.music__list_content');
        this.render_doms = {
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
    renderSongList() {
        let _str = '';
        this.musics.songs.forEach((song, i) => {
            _str += `<li class="music__list__item">${song.title}</li>`
        });
        this.song_list.html(_str);
    }
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