import EventEmitter from "./EventEmitter";

export default class Time extends EventEmitter{
    constructor(){
        super()


        //Properties
        this.start = Date.now()
        this.current = this.start
        this.elpased = 0
        this.delta = 16


        window.requestAnimationFrame(() => {
            this.tick()
        })

    }


    tick(){
        const currentTime = Date.now()
        this.delta = currentTime - this.current
        this.current = currentTime
        this.elpased = this.current - this.start

        this.trigger('tick')
        window.requestAnimationFrame(() => {
            this.tick()
        })
    }
}