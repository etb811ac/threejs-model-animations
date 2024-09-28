import * as THREE from 'three'

export default class Fox{
    constructor(experience){
        this.experience = experience
        this.scene = experience.scene
        this.resources = experience.resources
        this.time = experience.time

        //debug
        this.debug = experience.debug
        if(this.debug.active) this.debugFolder = this.debug.ui.addFolder('Fox')

        this.resource = this.resources.items.foxModel

        this.setModel()
        this.setAnimations()
    }

    setModel(){
        this.model = this.resource.scene
        this.model.scale.set(0.02, 0.02, 0.02)
        this.model.traverse((child) => {
            if(child instanceof THREE.Mesh) child.castShadow = true
        })
        
        this.scene.add(this.model)
    }

    setAnimations(){
        this.animations = {}
        this.animations.mixer = new THREE.AnimationMixer(this.model)

        this.animations.actions = {}
        this.animations.actions.idle  = this.animations.mixer.clipAction(this.resource.animations[0])
        this.animations.actions.walking  = this.animations.mixer.clipAction(this.resource.animations[1])
        this.animations.actions.running  = this.animations.mixer.clipAction(this.resource.animations[2])
        this.animations.actions.current = this.animations.actions.idle
        this.animations.actions.current.play()

        this.animations.play = (name) => {
            const newAnimation = this.animations.actions[name]
            const prevAnimation = this.animations.actions.current

            newAnimation.reset()
            newAnimation.play()
            newAnimation.crossFadeFrom(prevAnimation, 2)

            this.animations.actions.current = newAnimation
        }


        //debug
        if(this.debug.active){
            const debugObject = {
                Idle : () => {this.animations.play('idle')},
                Walking : () => {this.animations.play('walking')},
                Running : () => {this.animations.play('running')}
            }

            this.debugFolder.add(debugObject, 'Idle')
            this.debugFolder.add(debugObject, 'Walking')
            this.debugFolder.add(debugObject, 'Running')

            if(this.experience.sizes.width <= '500') this.debugFolder.close()

        }


    }

    update(){
        this.animations.mixer.update(this.time.delta* 0.001)
    }
}