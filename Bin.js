class Bin {  
    constructor( x, y, width, height){
        var options = {
            'isStatic' : true
        }

        this.bodyb = Bodies.rectangle(x,y, width, height,options );
	  
        this.bodyb.width = width
        this.bodyb.height = height 
        
   }
   display(){
       fill("white");
       rect(this.bodyb.position.x, this.bodyb.position.y,this.bodyb.width, this.bodyb.height)

   }
}