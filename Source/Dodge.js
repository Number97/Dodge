var objects
var size
var count
var count2
var count3
var number
var score
var removed
var stage
var d=0
var g=0
var h=0
var stage=0
var count4=0
	
function setup() 
{
	createCanvas(800, 800)
	objects = []
	size = 0
	count = 1
	count2 = 0
	count3 = 1
	number = 0
	score = 0
	objects.push(new Objectt(5))
	size++
}

function draw()
{	
	if(count4==314)
	{
		count4=0
	}
	else
	(
		count4++
	)
	if(count%60==0)
	{
		count=0
		count2++

		if(count2%10==0)
		{
			count2=0
			if(count3<3)
			{
				count3++;
			}
		}
		for(var i=0;i<count3;i++)
		{
			number=random(101,113)
			while((i==3)&&((number+objects[size-1].pos+objects[size-2]==306)||(number+objects[size-1].pos+objects[size-2]==315)||(number+objects[size-1].pos+objects[size-2]==324)||(number+objects[size-1].pos+objects[size-2]==333)))
			{
				number=random(101,113)
			}
			number=(int)(number)
			objects.push(new Objectt(number))
			size++
		}
	}
	if(gameOver())
	{
		noLoop()
	}
	background(0);
	stroke(50);
	line(350,0,350,800)
	line(450,0,450,800)
	line(550,0,550,800)
	line(250,0,250,800)
	line(0,350,800,350)
	line(0,450,800,450)
	line(0,550,800,550)
	line(0,250,800,250)
	fill(75,170,255)
	circle(objects[0].actualPosX,objects[0].actualPosY,30)
	objects[0].goToNext()
	fill(255)
	for(var i=1;i<size;i++)
	{
		if(objects[i].glitter)
		{
			d=random(-2,2)
			g=random(-2,2)
			h=random(-2,2)
		}
		/*if((objects[i].target==0)||(objects[i].target==2))
		{
			circle(objects[i].actualPosX+cos(count4/10)*10,objects[i].actualPosY,30)
		}
		else
		{
			circle(objects[i].actualPosX,objects[i].actualPosY+cos(count4/10)*10,30)
		}*/
		circle(objects[i].actualPosX,objects[i].actualPosY,30)
		d=0
		objects[i].goToNext()
	}
	count++
	score+=count3*count3
	text("Score: ",650,100)
	text(score,700,100)
	text("If you lost, press 'r' for restart",50,700)
	destroy()
}

function destroy()
{
	for(var i=1;i<size;i++)
	{
		if(objects[i].target==5)
		{
			removed=objects.splice(i,1)
			size--
			i--;
		}
	}
}

function gameOver()
{
	for(var i=1;i<size;i++)
	{
		if((((objects[i].actualPosX-objects[0].actualPosX)*(objects[i].actualPosX-objects[0].actualPosX))+((objects[i].actualPosY-objects[0].actualPosY)*(objects[i].actualPosY-objects[0].actualPosY)))<3600)
		{
			return true
		}
	}
	return false
}

function keyPressed()
{	
	if(!gameOver())
	{
		if(objects[0].target==5)
		{
			if (keyCode == DOWN_ARROW)
			{
				if((objects[0].pos!=7)&&(objects[0].pos!=8)&&(objects[0].pos!=9))
				{
					objects[0].target=0
					objects[0].targetPosY+=100
					objects[0].targetPos+=3
				}
			}
			
			if (keyCode == LEFT_ARROW)
			{
				if((objects[0].pos!=1)&&(objects[0].pos!=4)&&(objects[0].pos!=7))
				{
					objects[0].target=1
					objects[0].targetPosX-=100
					objects[0].targetPos--
				}
			}

			if (keyCode == UP_ARROW)
			{
				if((objects[0].pos!=1)&&(objects[0].pos!=2)&&(objects[0].pos!=3))
				{
					objects[0].target=2
					objects[0].targetPosY-=100
					objects[0].targetPos-=3
				}
			}

			if (keyCode == RIGHT_ARROW)
			{
				if((objects[0].pos!=3)&&(objects[0].pos!=6)&&(objects[0].pos!=9))
				{
					objects[0].target=3
					objects[0].targetPosX+=100
					objects[0].targetPos++
				}
			}
		}
	}
	else if(key=='r')
	{
		objects = []
		size = 0
		count = 1
		count2 = 0
		count3 = 1
		number = 0
		score = 0
		objects.push(new Objectt(5))
		size++
		loop()
		frameRate(200)
	}
}		