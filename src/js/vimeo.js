import Player from '@vimeo/player'
import {
  launchIntoFullscreen, exitFullscreen, iOS, isSafariDesktop
} from './utils'

class Vimeo {
  constructor ({
    id, element, options = {
      autoplay: false,
      muted: false,
      loop: true,
      controls: false
    }
  }) {
    this.id = id
    this.el = element

    this.isMuted = false
    this.isInit = false
    this.isPlaying = false
    this.isLoaded = false
    this.isFullscreen = false

    if (!this.id || !this.el) {
      console.warn('Missing required arguements, abording Vimeo initializer') // eslint-disable-line
      return
    }

    this.options = options
    // const mutedPreference = localStorage.getItem('vimeoMuted')
    // if (mutedPreference === 'true') this.options.muted = true
    // if (mutedPreference === 'false') this.options.muted = false

    /* Enforce mute with IOS device */
    if (iOS === true) {
      this.options.muted = true
    }

    this.init()
  }

  ioCallback (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
      }
    })
  }

  async init () {
    this.playBtn = this.el.querySelector('.vimeo-player__play')
    this.pauseBtn = this.el.querySelector('.vimeo-player__pause')
    this.mute = this.el.querySelector('.vimeo-player__mute')
    this.seek = this.el.querySelector('.vimeo-player__seek')
    this.progress = this.el.querySelector('.vimeo-player__progress')
    this.maximize = this.el.querySelector('.vimeo-player__maximize')
    this.loader = this.el.querySelector('.loader')

    this.isMuted = this.options.muted
    if (this.isMuted === false) this.mute.classList.add('active')

    try {
      this.player = new Player(this.el, {
        id: this.id,
        ...this.options
      })
      this.isInit = true
      this.on()
    } catch (error) {
      throw new Error(`Init vimeo – ${error}`)
    }

    try {
      const loadEvent = this.options.autoplay === true ? 'playing' : 'loaded'

      this.player.on(loadEvent, () => {
        if (this.isLoaded) return
        this.el.classList.add('is-loaded')
        this.isLoaded = true
        this.loader.classList.add('clear')
      })

      this.duration = await this.player.getDuration()

      this.player.on('playing', () => {
        this.isPlaying = true
        this.playBtn.classList.add('active')
        this.pauseBtn.classList.remove('active')
        this.loader.classList.add('clear')
        this.trackProgress()
        this.resetHideTimer()
      })

      this.player.on('pause', () => {
        this.isPlaying = false
        this.playBtn.classList.remove('active')
        this.pauseBtn.classList.add('active')
        this.stopProgress()
        clearTimeout(this.timer)
      })

      if (isSafariDesktop || iOS) {
        this.player.on('fullscreenchange', ({ fullscreen }) => {
          this.isFullscreen = fullscreen
          if (fullscreen === false) {
            this.maximize.classList.add('active')
            this.previous = document.onkeydown
            document.onkeydown = () => { }
          }
          if (fullscreen === true) {
            this.maximize.classList.remove('active')
            document.onkeydown = this.previous
          }
        })
      }
    } catch (error) {
      throw new Error(`Init events – ${error}`)
    }
  }

  on () {
    this.playHandler = () => {
      this.play()
      this.loader.classList.remove('clear')
    }
    this.pauseHandler = this.pause.bind(this)
    this.muteHandler = () => this.toggleMute()
    this.mousemoveHandler = () => {
      this.el.classList.remove('hide')
      this.resetHideTimer()
    }
    this.progressClickHander = (e) => {
      const { target } = e
      const bounds = target.getBoundingClientRect()
      const max = bounds.width
      const pos = e.pageX - bounds.left
      const percentage = Math.round((pos / max) * 100)
      this.goTo(percentage)
    }
    this.toggleFullscreenHandler = () => this.toggleFullscreen()

    this.playBtn.addEventListener('click', this.playHandler)
    this.pauseBtn.addEventListener('click', this.pauseHandler)
    this.mute.addEventListener('click', this.muteHandler)
    this.el.addEventListener('mousemove', this.mousemoveHandler)
    this.maximize.addEventListener('click', this.toggleFullscreenHandler)
    this.progress.addEventListener('click', this.progressClickHander)
  }

  off () {
    this.playBtn.removeEventListener('click', this.playHandler)
    this.pauseBtn.removeEventListener('click', this.pauseHandler)
    this.mute.removeEventListener('click', this.muteHandler)
    this.el.removeEventListener('mousemove', this.mousemoveHandler)
    this.progress.removeEventListener('click', this.progressClickHandler)
    this.maximize.addEventListener('click', this.toggleFullscreenHandler)
  }

  toggleFullscreen () {
    if (this.isFullscreen) {
      this.leaveFullscreen()
    } else {
      this.enterFullscreen()
    }
  }

  async enterFullscreen () {
    if (iOS || isSafariDesktop) {
      this.player.requestFullscreen().then(() => {
        // the player entered fullscreen
      }).catch((error) => {
        throw new Error(`enterFullscreen – ${error}`)
      })
      return
    }

    launchIntoFullscreen(this.el)
    this.isFullscreen = true
    this.maximize.classList.add('active')
    this.previous = document.onkeydown
    document.onkeydown = () => { }
  }

  leaveFullscreen () {
    if (iOS || isSafariDesktop) {
      this.player.exitFullscreen().then(() => {
        // the player entered fullscreen
      }).catch((error) => {
        throw new Error(`leaveFullscreen – ${error}`)
      })
      return
    }

    exitFullscreen(this.el)
    this.isFullscreen = false
    this.maximize.classList.remove('active')
    document.onkeydown = this.previous
  }

  async play () {
    try {
      if (this.isPlaying === false) {
        this.playbackPromise = this.player.play()
      }
    } catch (error) {
      throw new Error(`Play – ${error}`)
    }
  }

  async pause () {
    try {
      if (this.isPlaying === false) return
      await this.playbackPromise
      this.player.pause()
    } catch (error) {
      throw new Error(`Pause – ${error}`)
    }
  }

  goTo (percentage) {
    try {
      const time = (percentage / 100) * this.duration
      this.player.setCurrentTime(time)
      if (!this.isPlaying) this.updateProgress(time)
    } catch (error) {
      throw new Error(`Goto – ${error}`)
    }
  }

  resetHideTimer () {
    if (this.timer) clearTimeout(this.timer)
    if (!this.isPlaying) return
    this.timer = setTimeout(() => {
      this.el.classList.add('hide')
    }, 3500)
  }

  async destroy () {
    try {
      await this.pause()
      this.off()
      this.seek.innerHTML = '0:00'
      this.progress.style.setProperty('--progress', 0)
      this.stopProgress()
      this.player.destroy()
      this.isInit = false
    } catch (error) {
      throw new Error(`Destroy – ${error}`)
    }
  }

  async toggleMute () {
    this.mute.classList.toggle('active')
    if (this.isMuted) {
      await this.player.setMuted(false)
      this.isMuted = false
      localStorage.setItem('vimeoMuted', 'false')
    } else {
      await this.player.setMuted(true)
      this.isMuted = true
      localStorage.setItem('vimeoMuted', 'true')
    }
  }

  async updateProgress (duration) {
    try {
      duration = Number(duration)
      const m = Math.floor((duration % 3600) / 60)
      const s = Math.floor(duration % 3600 % 60)
      this.seek.innerHTML = `${m}:${s.toString().length === 1 ? `0${s}` : s}`

      const progress = duration / this.duration
      this.progress.style.setProperty('--progress', progress)
    } catch (error) {
      throw new Error(`updateProgress – ${error}`)
    }
  }

  async getCurrentTime () {
    try {
      if (this.isInit === false) return
      const time = await this.player.getCurrentTime()
      this.updateProgress(time)
    } catch (error) {
      throw new Error(`getCurrentTime – ${error}`)
    }
  }

  trackProgress () {
    this.interval = setInterval(this.getCurrentTime.bind(this), 100)
  }

  stopProgress () {
    clearInterval(this.interval)
  }
}

export default Vimeo
