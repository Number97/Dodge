var objects
var size
var count
var count2
var count3
var number
var score
var removed

var stage = 1
var transitionStage = 0

var d=0
var h=0

var r=0
var g=0
var b=0

var cX=0
var cY=0

var count4=0
var epilepsy = false
var shaky = false
var curvy = false
	
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
	if(gameOver())
	{
		noLoop()
	}

	switch(stage)
	{
		case 1:
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
						stage++
					}
					number=random(107,109)
					number=(int)(number)
					objects.push(new Objectt(number))
					size++
				}
				background(0);
				stroke(50);
				line(0,400,800,400)
				line(0,300,800,300)
				line(400,400,400,300)
			break;

		case 2:
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
						while((i==3)&&((number+objects[size-1].pos+objects[size-2].pos==306)||(number+objects[size-1].pos+objects[size-2].pos==315)||(number+objects[size-1].pos+objects[size-2].pos==324)||(number+objects[size-1].pos+objects[size-2].pos==333)))
						{
							number=random(101,113)
						}
						number=(int)(number)
						objects.push(new Objectt(number))
						size++
					}
				}
				background(0);
				stroke(50);
				line(300,0,300,800)
				line(400,0,400,800)
				line(500,0,500,800)
				line(0,300,800,300)
				line(0,400,800,400)
				line(0,500,800,500)
			break;
	}
	
	fill(75,170,255)
	objects[0].goToNext()
	circle(objects[0].actualPosX,objects[0].actualPosY,30)
	for(var i=1;i<size;i++)
	{
		if(shaky)
		{
			d=random(-5,5)
			h=random(-5,5)
		}
		if(epilepsy)
		{
			r=random(0,255)
			b=random(0,255)
			g=random(0,255)
		}
		if(curvy)
		{
			if((objects[i].target==0)||(objects[i].target==2))
			{
				cX=cos(count4/10)*10
			}
			else
			{
				cY=cos(count4/10)*10
			}
			
		}
		fill(255-r,255-g,255-b)
		circle(objects[i].actualPosX+d+cX,objects[i].actualPosY+h+cY,30)

		d=0
		h=0

		r=0
		g=0
		b=0
		
		cX=0
		cY=0

		objects[i].goToNext()
	}


	count++
	score+=count3*count3
	fill(255)
	text("Score: ",650,100)
	text(score,700,100)
	text("If you lose, press 'r' for restart",50,700)
	text("For shaky mode, press 's'",50,100)
	text("For curvy mode, press 'c'",50,115)
	text("For epileptic mode, press 'e'",50,130)
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
		if((((objects[i].actualPosX-objects[0].actualPosX)*(objects[i].actualPosX-objects[0].actualPosX))+((objects[i].actualPosY-objects[0].actualPosY)*(objects[i].actualPosY-objects[0].actualPosY)))<=3600)
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
			switch(stage)
			{
				case 1:
					if (keyCode == DOWN_ARROW)
					{
						if(objects[0].pos!=5)
						{
							objects[0].target=0
							objects[0].targetPosY+=100
							objects[0].targetPos+=3
						}
					}
	
					if (keyCode == UP_ARROW)
					{
						if(objects[0].pos!=2)
						{
							objects[0].target=2
							objects[0].targetPosY-=100
							objects[0].targetPos-=3
						}
					}
					break;

				case 2:
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
					break;
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
	if(key=='c')
	{
		curvy=!curvy
	}
	if(key=='e')
	{
		epilepsy=!epilepsy
	}
	if(key=='s')
	{
		shaky=!shaky
	}
}		