import * as THREE from 'three'

export default class Enviroment {
    constructor(experience) {
        //properties
        this.scene = experience.scene
        this.resources = experience.resources

        //debug
        this.debug = experience.debug
        if(this.debug.active) this.debugFolder = this.debug.ui.addFolder('Enviroment')

        //functions
        this.setSunlight()
        this.setEnviroment()
    }

    setSunlight() {
        this.instance = new THREE.DirectionalLight('#ffffff', 4)
        this.instance.castShadow = true
        this.instance.shadow.camera.far = 15
        this.instance.shadow.mapSize.set(1024, 1024)
        this.instance.shadow.normalBias = 0.05
        this.instance.position.set(3.5, 2, - 1.25)
        this.scene.add(this.instance)

        if(this.debug.active){
            this.debugFolder.add(this.instance, 'intensity', 0 , 8, 0.0001).name('Sun Intensity')
            this.debugFolder.add(this.instance.position, 'x', -8 , 8, 0.0001).name('Sun Position')
        }
    }

    setEnviroment() {
        this.enviromentMap = {}
        this.enviromentMap.intensity = .1
        this.enviromentMap.texture = this.resources.items.environmentMapTexture
        this.enviromentMap.colorSpace = THREE.SRGBColorSpace

        this.scene.environment = this.enviromentMap.texture
        this.enviromentMap.updateMaterial = () => {
            this.scene.traverse((child) => {

                if (child instanceof THREE.Mesh  && child.material instanceof THREE.MeshStandardMaterial){
                    child.material.envMap = this.enviromentMap.texture
                    child.material.envMapIntensity = this.enviromentMap.intensity
                    child.material.needsUpdate = true
                }
                    
            })
        }
        this.enviromentMap.updateMaterial()

        if(this.debug.active){
            this.debugFolder.add(this.enviromentMap, 'intensity', 0,4,0.001).name('Enviroment Intensity').onChange(this.enviromentMap.updateMaterial)
            this.debugFolder.close()
        }
    }
}

