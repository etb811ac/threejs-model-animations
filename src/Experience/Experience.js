import Camera from "./Camera"
import Renderer from "./Renderer"
import Sizes from "./Utils/Sizes"
import Time from "./Utils/Time"
import *  as THREE from 'three'
import World from "./World/World"
import Resources from "./Utils/Resources"
import sources from "./sources"
import Debug from "./Utils/Debug"



export default class Experience {
    constructor(canvas) {
        window.experience = this

        //properties
        this.canvas = canvas
        this.debug = new Debug()
        this.sizes = new Sizes()
        this.time = new Time()
        this.scene = new THREE.Scene()
        this.resources = new Resources(sources)
        this.camera = new Camera(this)
        this.renderer = new Renderer(this)
        this.world = new World(this)


        this.sizes.on('resizing', () => { this.resize() })
        this.time.on('tick', () => { this.tick() })
    }

    resize() {
        this.camera.resize()
        this.renderer.resize()
    }

    tick() {
        this.camera.update()
        this.world.update()
        this.renderer.update()
    }
}