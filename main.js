var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg", function(Img){
    player=Img;
        player.scaleToWidth(700);
        player.scaleToHeight(510);
        player.set({
            top:0,
            left:0
        });
        canvas.add(player);
    });	
}

function playSound(){
	x.play();
}
