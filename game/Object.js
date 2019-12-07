class Objectt
{
	constructor(_pos)
	{
		this.pos=_pos
		this.targetPos=_pos
		this.target=5
		this.targetPosX=0
		this.targetPosY=0
		this.actualPosX=0
		this.actualPosY=0
		this.glitter=true
		
		if(this.pos<=9)
		{
			this.speed=50
		}
		else
		{
			this.speed=5
		}

		switch(this.pos)
		{
			case 1:
				this.targetPosX=this.actualPosX=300
				this.targetPosY=this.actualPosY=300
			break
			
			case 2:
				this.targetPosX=this.actualPosX=300
				this.targetPosY=this.actualPosY=400
			break

			case 3:
				this.targetPosX=this.actualPosX=300
				this.targetPosY=this.actualPosY=500
			break
			
			case 4:
				this.targetPosX=this.actualPosX=400
				this.targetPosY=this.actualPosY=300
			break
			
			case 5:
				this.targetPosX=this.actualPosX=400
				this.targetPosY=this.actualPosY=400
			break
			
			case 6:
				this.targetPosX=this.actualPosX=400
				this.targetPosY=this.actualPosY=500
			break
			
			case 7:
				this.targetPosX=this.actualPosX=500
				this.targetPosY=this.actualPosY=300
			break
			
			case 8:
				this.targetPosX=this.actualPosX=500
				this.targetPosY=this.actualPosY=400
			break
			
			case 9:
				this.targetPosX=this.actualPosX=500
				this.targetPosY=this.actualPosY=500
			break
			
			case 101:
				this.target=0
				this.targetPosX=this.actualPosX=300
				this.actualPosY=-50
				this.targetPosY=850
			break
			
			case 102:
				this.target=0
				this.targetPosX=this.actualPosX=400
				this.actualPosY=-50
				this.targetPosY=900
			break
			
			case 103:
				this.target=0
				this.targetPosX=this.actualPosX=500
				this.actualPosY=-50
				this.targetPosY=900
			break
			
			case 104:
				this.target=2
				this.targetPosX=this.actualPosX=300
				this.actualPosY=850
				this.targetPosY=-50
			break

			case 105:
				this.target=2
				this.targetPosX=this.actualPosX=400
				this.actualPosY=850
				this.targetPosY=-50
			break

			case 106:
				this.target=2
				this.targetPosX=this.actualPosX=500
				this.actualPosY=850
				this.targetPosY=-50
			break

			case 107:
				this.target=3
				this.targetPosY=this.actualPosY=300
				this.actualPosX=-50
				this.targetPosX=850
			break
			
			case 108:
				this.target=3
				this.targetPosY=this.actualPosY=400
				this.actualPosX=-50
				this.targetPosX=850
			break
			
			case 109:
				this.target=3
				this.targetPosY=this.actualPosY=500
				this.actualPosX=-50
				this.targetPosX=850
			break
			
			case 110:
				this.target=1
				this.targetPosY=this.actualPosY=300
				this.actualPosX=850
				this.targetPosX=-50
			break

			case 111:
				this.target=1
				this.targetPosY=this.actualPosY=400
				this.actualPosX=850
				this.targetPosX=-50
			break

			case 112:
				this.target=1
				this.targetPosY=this.actualPosY=500
				this.actualPosX=850
				this.targetPosX=-50
			break
		}
	}

	goToNext()
	{
		switch(this.target)
		{
			case 0:
				this.actualPosY+=this.speed
			break

			case 1:
				this.actualPosX-=this.speed
			break
			
			case 2:
				this.actualPosY-=this.speed
			break

			case 3:
				this.actualPosX+=this.speed
			break
		}

		if((this.actualPosX==this.targetPosX)&&(this.actualPosY==this.targetPosY))
		{
			this.pos=this.targetPos
			this.target=5
		}
	}
}