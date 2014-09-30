var purple = [280 , 50 , 60];
var blue = [196 , 77 , 55];
var green = [75 , 100 , 40];
var orange = [40 , 100 , 60];
var red = [0 , 100 , 40];

var myName;
myName = prompt("Specify the name");
var myColour;
myColour= prompt("Specify the Colour");
if(color === "purple")
{
	letterColours = [purple];
}
else if(color === "blue")
{
	letterColours = [blue];
}
else if(color === "green')
{
	letterColours = [green];
}
else if(color === "orange")
{
	letterColours = [orange];
}
else if(color === "red")
{
	letterColours = [red];
}

if(myName === null)
	bubbleShape="square";
else
	bubbleShape="circle";

drawName(myName,letterColours);
bounceBubbles();


