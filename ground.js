class ground{
    constructor(){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(200,370,400,100, options)
        this.width = 400
        this.height = 100
        World.add(world, this.body)
    }
    show(){
        var yay = this.body.position
        rectMode(CENTER)
        fill("purple")
        rect(yay.x, yay.y, this.width, this.height)
    }
}
