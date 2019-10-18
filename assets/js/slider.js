var slides = $('.slide');
var count = slides.length;
var maxPos = 600*count;
var i=0;
var x=0;
var left;
var position=0;
var IntervalID;
var timerInterval=4000;

function setTimer(interval){
	timerInterval = interval;
}
//Set Slider content div's Width
$('.slider-content').css({'width' : maxPos ,
						  'height' : '400px' ,
						  'position' : 'absolute',
						  'top' : '0px',
						  'left' : '0px'});
//Center images vertically
for(; i < count; i++){
	left=(i*600);
	var h = $(slides[i]).height();
	var calculated = 'calc(50% - '+ h/2 + 'px)';
	$(slides[i]).css({'left' : left ,
					  'top' : calculated });
}

//Next slide
$('.slider-next').click(function(){
	if(position<count-1){
		position+=1;
		$('.slider-content').animate({
			left : "-=600"
		},600,function(){
			
		});
	}else{
		position=0;
		$('.slider-content').animate({
			left : "0"
		},600,function(){
			
		});
	}
	
});

//Previous slide
$('.slider-prev').click(function(){
	if(position>0){
		position-=1;
		$('.slider-content').animate({
			left : "+=600"
		},600,function(){
			
		});
	}else{
		position=count-1;
		$('.slider-content').animate({
			left : 600-maxPos
		},600,function(){
			
		});
	}
	
});


//Stop changing when mouse on .slider
$('.slider').mouseover(function(){
	clearInterval(IntervalID);
});

//Start changing when mouse leave
$('.slider').mouseleave(function(){
	IntervalID = setInterval(function(){
		if(position<count-1){
			position+=1;
			$('.slider-content').animate({
				left : "-=600"
			},600,function(){
				
			});
		}else{
			position=0;
			$('.slider-content').animate({
				left : "0"
			},600,function(){
				
			});
		}
	},timerInterval);
});
//Start changing while loading script.
IntervalID = setInterval(function(){
		if(position<count-1){
			position+=1;
			$('.slider-content').animate({
				left : "-=600"
			},600,function(){
				
			});
		}else{
			position=0;
			$('.slider-content').animate({
				left : "0"
			},600,function(){
				
			});
		}
	},timerInterval);
