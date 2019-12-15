var objects
var size
var count
var count2
var count3
var number
var score
var removed
var locked = false

var stage = 1
var transitionStage = 0

var multiplier = 1

var d=0
var h=0

var r=0
var g=0
var b=0

var cX=0
var cY=0
var minimum
var minimumDistance=false
var index

var count4=0
var epilepsy = false
var shaky = false
var curvy = false
	
function setup() 
{
	createCanvas(400, 400)
	objects = []
	size = 0
	count = 1
	count2 = 0
	count3 = 1
	number = 0
	score = 0
	objects.push(new Objectt(5))
	size++
	// set options to prevent default behaviors for swipe, pinch, etc
	var options = {
		preventDefault: true
	};
	// document.body registers gestures anywhere on the page
	var hammer = new Hammer(document.body, options);
	hammer.get('swipe').set({
	direction: Hammer.DIRECTION_ALL
	});
	
	hammer.on("swipe", swiped);

	textSize(8)
}

function draw()
{	
	if(!mousePressed)
	{
		locked=false
	}
	index=0
	minimum=600
	if(gameOver())
	{
		for(var i=0;i<size;i++)
		{
			if(objects[i].target==5)
			{
				objects[i].speed=0
			}
		}
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
			if(count%90==0)
			{
				count=0
				if(count2<=10)
				{
					number=random(107,109)
					number=(int)(number)
					objects.push(new Objectt(number))
					size++
					count2++
				}
				else if(size==1)
				{
					stage=12
				}
			}
			background(0);
			stroke(50);
			line(0,200,400,200)
			line(0,150,400,150)
			line(200,200,200,150)
			break;

		case 12:
			background(0);
			stroke(50);
			line(0,200,400,200)
			line(0,150,400,150)
			line(200,200+transitionStage/2,200,150)
			if(transitionStage==100)
			{
				stage=2
				transitionStage=0
				multiplier=2
				count = 1
				count2 = 0
				count3 = 1
				number = 0
			}
			else
			{
				transitionStage++;
			}
			line(0,200+transitionStage/2,400,200+transitionStage/2)
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
			if(count%90==0)
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
				if(count3<=2)
				{
					for(var i=0;i<count3;i++)
					{
						number=random(107,110)
						number=(int)(number)

						if(i==1)
						{
							while(number==objects[size-1].pos)
							{
								number=random(107,110)
								number=(int)(number)
							}
						}
						number=(int)(number)
						objects.push(new Objectt(number))
						size++
					}
				}
				else if(size==1)
				{
					stage=23
				}
			}
			background(0);
			stroke(50);
			line(0,200,400,200)
			line(0,150,400,150)
			line(0,250,400,250)
			line(200,250,200,150)
			break;

		case 23:
			background(0);
			stroke(50);
			line(0,200,400,200)
			line(0,150,400,150)
			line(0,250,400,250)
			if(transitionStage==200)
			{
				line(200,250+3*(transitionStage-100)/2,200,150-3*(transitionStage-100)/2)
				line(250,250+3*(transitionStage-100)/2,250,150-3*(transitionStage-100)/2)
				stage=3
				transitionStage=0
				multiplier=4
				count = 1
				count2 = 0
				count3 = 1
				number = 0
			}
			else if(transitionStage<100)
			{
				line(200,250,200,150)
				line(200+transitionStage/2,250,200+transitionStage/2,150)
				transitionStage++;
			}
			else
			{
				line(200,250+3*(transitionStage-100)/2,200,150-3*(transitionStage-100)/2)
				line(250,250+3*(transitionStage-100)/2,250,150-3*(transitionStage-100)/2)
				transitionStage++;
			}
			break;

		case 3:
			if(count4==314)
			{
				count4=0
			}
			else
			(
				count4++
			)
			if(count%90==0)
			{
				count=0
				count2++
		
				if(count2%10==0)
				{
					count2=0
					if(count3<4)
					{
						count3++;
					}
				}
				if(count3<=3)
				{
					for(var i=0;i<count3;i++)
					{
						number=random(105,110)
						number=(int)(number)
						if(number<107)
						{
							number-=3
						}
						if(i==2)
						{
							while((number+objects[size-1].pos+objects[size-2].pos==324)||(number+objects[size-1].pos+objects[size-2].pos==314)||(number+objects[size-1].pos+objects[size-2].pos==313)||(number+objects[size-1].pos+objects[size-2].pos==312)||(number+objects[size-1].pos+objects[size-2].pos==307)||(number+objects[size-1].pos+objects[size-2].pos==308))
							{
								number=random(105,110)
								number=(int)(number)
								if(number<107)
								{
									number-=3
								}
							}
						}
						if(i==1)
						{
							while((number+objects[size-1].pos==205)||(number==objects[size-1].pos))
							{
								number=random(105,110)
								number=(int)(number)
								if(number<107)
								{
									number-=3
								}
							}
						}
						objects.push(new Objectt(number))
						size++
					}
				}
				else if(size==1)
				{
					stage=34
				}
			}
			background(0);
			stroke(50);
			line(0,200,400,200)
			line(0,150,400,150)
			line(0,250,400,250)
			line(200,0,200,400)
			line(250,0,250,400)
			break;

		case 34:
			background(0);
			stroke(50);
			line(0,200,400,200)
			line(0,150,400,150)
			line(0,250,400,250)
			line(200,0,200,400)
			line(250,0,250,400)
			if(transitionStage==100)
			{
				stage=4
				transitionStage=0
				multiplier=7
				count = 1
				count2 = 0
				count3 = 1
				number = 0
			}
			else
			{
				transitionStage++;
			}
			line(200-transitionStage/2,0,200-transitionStage/2,400)
			break;

		case 4:
			if(count4==314)
			{
				count4=0
			}
			else
			(
				count4++
			)
			if(count%90==0)
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
					number=(int)(number)
					if(i==2)
					{
						while((number+objects[size-1].pos+objects[size-2].pos==306)||(number+objects[size-1].pos+objects[size-2].pos==315)||(number+objects[size-1].pos+objects[size-2].pos==324)||(number+objects[size-1].pos+objects[size-2].pos==333))
						{
							number=random(101,113)
							number=(int)(number)
						}
					}
					objects.push(new Objectt(number))
					size++
				}
			}
			background(0);
			stroke(50);
			line(150,0,150,400)
			line(200,0,200,400)
			line(250,0,250,400)
			line(0,150,400,150)
			line(0,200,400,200)
			line(0,250,400,250)
			break;
	}
	
	fill(75,170,255)
	for(var p=0;p<objects[0].speed;p++)
	{
		if(gameOver())
		{
			p=objects[0].speed
		}
		else
		{
			objects[0].goToNext()
		}
	}
	circle(objects[0].actualPosX,objects[0].actualPosY,15)
	for(var i=1;i<size;i++)
	{
		if(shaky)
		{
			d=random(-3,3)
			h=random(-3,3)
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
				cX=cos(count4/5)*5
			}
			else
			{
				cY=cos(count4/5)*5
			}
			
		}
		fill(255-r,255-g,255-b)
		circle(objects[i].actualPosX+d+cX,objects[i].actualPosY+h+cY,15)

		d=0
		h=0

		r=0
		g=0
		b=0
		
		cX=0
		cY=0

		for(var p=0;p<objects[i].speed;p++)
		{
			if(gameOver())
			{
				p=objects[i].speed
			}
			else
			{
				objects[i].goToNext()
			}
		}
	}

	count++

	if(!gameOver())
	{
		score+=count3*count3 * multiplier
	}
	fill(255)
	text("Score: ",325,50)
	text(score,350,50)
	if(stage<10)
	{
		text("Stage " + stage,300,325)
	}
	text("(Use arrows or swipe to move)",265,350)
	destroy()

	text("curvy",47,278)
	if(curvy)
	{
		fill(0,0,170)
	}
	else
	{
		fill(255)
	}
	rect(108,267,14,14)
	fill(255)
	circle(25,274+cos(count4/5)*5,8)
	text("shaky",47,301)
	if(shaky)
	{
		fill(0,0,170)
	}
	else
	{
		fill(255)
	}
	rect(108,290,14,14)
	fill(255)
	circle(25+random(-2,2),297+random(-2,2),8)
	text("epilepsy",47,324)
	if(epilepsy)
	{
		fill(0,0,170)
	}
	else
	{
		fill(255)
	}
	rect(108,313,14,14)
	fill(random(255),random(255),random(255))
	circle(25,320,8)
	fill(255)
	text("skip to stage 4",47,347)
	rect(108,336,14,14)
	text("restart",47,370)
	rect(108,359,14,14)
	text("show minimum distance",12,70)
	if(minimumDistance)
	{
		fill(0,0,170)
	}
	else
	{
		fill(255)
	}
	rect(108,59,14,14)
	fill(255)

	//minimum

	if(minimumDistance)
	{
		for(var i=1;i<size;i++)
		{
			if(sqrt(((objects[i].actualPosX-objects[0].actualPosX)*(objects[i].actualPosX-objects[0].actualPosX))+((objects[i].actualPosY-objects[0].actualPosY)*(objects[i].actualPosY-objects[0].actualPosY)))<minimum)
			{
				minimum=sqrt(((objects[i].actualPosX-objects[0].actualPosX)*(objects[i].actualPosX-objects[0].actualPosX))+((objects[i].actualPosY-objects[0].actualPosY)*(objects[i].actualPosY-objects[0].actualPosY)))
				index=i
			}
		}
		noFill()
		circle(objects[0].actualPosX,objects[0].actualPosY,minimum-15)
	}
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
		if((((objects[i].actualPosX-objects[0].actualPosX)*(objects[i].actualPosX-objects[0].actualPosX))+((objects[i].actualPosY-objects[0].actualPosY)*(objects[i].actualPosY-objects[0].actualPosY)))<=900)
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
				case (1):
					if (keyCode == DOWN_ARROW)
					{
						if(objects[0].pos!=5)
						{
							objects[0].target=0
							objects[0].targetPosY+=50
							objects[0].targetPos+=3
						}
					}
	
					if (keyCode == UP_ARROW)
					{
						if(objects[0].pos!=2)
						{
							objects[0].target=2
							objects[0].targetPosY-=50
							objects[0].targetPos-=3
						}
					}
					break;

				case 2:
						if (keyCode == DOWN_ARROW)
						{
							if(objects[0].pos!=8)
							{
								objects[0].target=0
								objects[0].targetPosY+=50
								objects[0].targetPos+=3
							}
						}
				
						if (keyCode == UP_ARROW)
						{
							if(objects[0].pos!=2)
							{
								objects[0].target=2
								objects[0].targetPosY-=50
								objects[0].targetPos-=3
							}
						}
						break;
			
				case 4:
					if (keyCode == DOWN_ARROW)
					{
						if((objects[0].pos!=7)&&(objects[0].pos!=8)&&(objects[0].pos!=9))
						{
							objects[0].target=0
							objects[0].targetPosY+=50
							objects[0].targetPos+=3
						}
					}
						
					if (keyCode == LEFT_ARROW)
					{
						if((objects[0].pos!=1)&&(objects[0].pos!=4)&&(objects[0].pos!=7))
						{
							objects[0].target=1
							objects[0].targetPosX-=50
							objects[0].targetPos--
						}
					}
	
					if (keyCode == UP_ARROW)
					{
						if((objects[0].pos!=1)&&(objects[0].pos!=2)&&(objects[0].pos!=3))
						{
							objects[0].target=2
							objects[0].targetPosY-=50
							objects[0].targetPos-=3
						}
					}
	
					if (keyCode == RIGHT_ARROW)
					{
						if((objects[0].pos!=3)&&(objects[0].pos!=6)&&(objects[0].pos!=9))
						{
							objects[0].target=3
							objects[0].targetPosX+=50
							objects[0].targetPos++
						}
					}
					break;
					
				case 3:
					if (keyCode == DOWN_ARROW)
					{
						if((objects[0].pos!=8)&&(objects[0].pos!=9))
						{
							objects[0].target=0
							objects[0].targetPosY+=50
							objects[0].targetPos+=3
						}
					}
					
					if (keyCode == LEFT_ARROW)
					{
						if((objects[0].pos!=2)&&(objects[0].pos!=5)&&(objects[0].pos!=8))
						{
							objects[0].target=1
							objects[0].targetPosX-=50
							objects[0].targetPos--
						}
					}

					if (keyCode == UP_ARROW)
					{
						if((objects[0].pos!=2)&&(objects[0].pos!=3))
						{
							objects[0].target=2
							objects[0].targetPosY-=50
							objects[0].targetPos-=3
						}
					}

					if (keyCode == RIGHT_ARROW)
					{
						if((objects[0].pos!=3)&&(objects[0].pos!=6)&&(objects[0].pos!=9))
						{
							objects[0].target=3
							objects[0].targetPosX+=50
							objects[0].targetPos++
						}
					}
					break;
			}
		}
	}
}

function mousePressed()
{
	if(!locked)
	{
		if((mouseX>=108)&&(mouseX<=122)&&(mouseY>=267)&&(mouseY<=281))
		{
			curvy=!curvy
		}

		if((mouseX>=108)&&(mouseX<=122)&&(mouseY>=290)&&(mouseY<=304))
		{
			shaky=!shaky
		}

		if((mouseX>=108)&&(mouseX<=122)&&(mouseY>=313)&&(mouseY<=327))
		{
			epilepsy=!epilepsy
		}

		if((mouseX>=108)&&(mouseX<=122)&&(mouseY>=336)&&(mouseY<=350))
		{
			stage=4
			multiplier=7
		}

		if((mouseX>=108)&&(mouseX<=122)&&(mouseY>=59)&&(mouseY<=73))
		{
			minimumDistance=!minimumDistance
		}

		if(((mouseX>=108)&&(mouseX<=122)&&(mouseY>=359)&&(mouseY<=373))&&(gameOver()))
		{

			stage=1
			multiplier =1
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
		locked=true
	}
}

function swiped(event)
{
	console.log(event);
	if(!gameOver())
	{
		if(objects[0].target==5)
		{
			switch(stage)
			{
				case (1):
					if (event.direction == 16)
					{
						if(objects[0].pos!=5)
						{
							objects[0].target=0
							objects[0].targetPosY+=50
							objects[0].targetPos+=3
						}
					}
	
					if (event.direction == 8)
					{
						if(objects[0].pos!=2)
						{
							objects[0].target=2
							objects[0].targetPosY-=50
							objects[0].targetPos-=3
						}
					}
					break;

				case 2:
						if (event.direction == 16)
						{
							if(objects[0].pos!=8)
							{
								objects[0].target=0
								objects[0].targetPosY+=50
								objects[0].targetPos+=3
							}
						}
				
						if (event.direction == 8)
						{
							if(objects[0].pos!=2)
							{
								objects[0].target=2
								objects[0].targetPosY-=50
								objects[0].targetPos-=3
							}
						}
						break;
			
				case 4:
					if (event.direction == 16)
					{
						if((objects[0].pos!=7)&&(objects[0].pos!=8)&&(objects[0].pos!=9))
						{
							objects[0].target=0
							objects[0].targetPosY+=50
							objects[0].targetPos+=3
						}
					}
						
					if (event.direction == 2)
					{
						if((objects[0].pos!=1)&&(objects[0].pos!=4)&&(objects[0].pos!=7))
						{
							objects[0].target=1
							objects[0].targetPosX-=50
							objects[0].targetPos--
						}
					}
	
					if (event.direction == 8)
					{
						if((objects[0].pos!=1)&&(objects[0].pos!=2)&&(objects[0].pos!=3))
						{
							objects[0].target=2
							objects[0].targetPosY-=50
							objects[0].targetPos-=3
						}
					}
	
					if (event.direction == 4)
					{
						if((objects[0].pos!=3)&&(objects[0].pos!=6)&&(objects[0].pos!=9))
						{
							objects[0].target=3
							objects[0].targetPosX+=50
							objects[0].targetPos++
						}
					}
					break;
					
				case 3:
					if (event.direction == 16)
					{
						if((objects[0].pos!=8)&&(objects[0].pos!=9))
						{
							objects[0].target=0
							objects[0].targetPosY+=50
							objects[0].targetPos+=3
						}
					}
					
					if (event.direction == 2)
					{
						if((objects[0].pos!=2)&&(objects[0].pos!=5)&&(objects[0].pos!=8))
						{
							objects[0].target=1
							objects[0].targetPosX-=50
							objects[0].targetPos--
						}
					}

					if (event.direction == 8)
					{
						if((objects[0].pos!=2)&&(objects[0].pos!=3))
						{
							objects[0].target=2
							objects[0].targetPosY-=50
							objects[0].targetPos-=3
						}
					}

					if (event.direction == 4)
					{
						if((objects[0].pos!=3)&&(objects[0].pos!=6)&&(objects[0].pos!=9))
						{
							objects[0].target=3
							objects[0].targetPosX+=50
							objects[0].targetPos++
						}
					}
					break;
			}
		}
	}
}