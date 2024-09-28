import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import gsap from 'gsap'

export default class Camera {
    constructor(experience) {
        //properties
        this.experience = experience
        this.sizes = experience.sizes
        this.scene = experience.scene
        this.canvas = experience.canvas

        //functions
        this.setInstance()
        this.setOrbitControls()
    }

    setInstance() {
        this.instance = new THREE.PerspectiveCamera(
            35,
            this.sizes.width / this.sizes.height,
            0.1,
            100
        )

        this.instance.position.set(-9, .1, 4)
        this.scene.add(this.instance)

        gsap.to(this.instance.position, {x:9, y:5, z:8 , duration:7})
    }

    setOrbitControls() {
        this.controls = new OrbitControls(this.instance, this.canvas)
        this.controls.enableDamping = true
    }
    resize() {
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }

    update(){
        this.controls.update()
    }
}