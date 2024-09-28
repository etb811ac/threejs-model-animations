import * as THREE from "three"
import Enviroment from "./Enviroment"
import Floor from "./Floor"
import Fox from "./Fox"

export default class World{
    constructor(experience){
        this.scene = experience.scene
        this.resources = experience.resources

        //resource load event
        this.resources.on('ready', ()=>{
            this.floor = new Floor(experience)
            this.fox = new Fox(experience)
            this.enviroment = new Enviroment(experience)
            
        })
    }

    update(){
        if(this.fox) this.fox.update()
    }
}