class Rope {
   constructor(body1,body2,effsetX,effsetY) {

this.effsetX =effsetX;
this.effsetY =effsetY;

var op = {

bodyA: body1 
  ,bodyB: body2
,pointB:{x:this.offsetX,y:this.offsetY}



}
this.rope =Matter.constraint
World,add(world,this.rope)


   }
display(){

var point1 = this.rope.bodyA.position
var point2 = this.rope.bodyB.position

strokeWeight(2)

var Anchoe1X = point1.x
var Anchoe2Y = point2.y

var Anchoe2X = point2.x + this.offsetX
var Anchoe2Y = point2.y + this.offsety

line(Anchoe1X,Anchoe1Y,Anchoe2X,Anchoe2Y)


}
   

}