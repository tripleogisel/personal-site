// brainWork array

var dumps = ["#dumpOne", "#dumpTwo", "#dumpThree", "#dumpFour", "#dumpFive", "#dumpSix", "#dumpSeven", "#dumpEight", "#dumpNine", "#dumpTen", "#dumpEleven", "#dumpTwelce", "#dumpThirteen", "#dumpFourteen", "#dumpFifteen", "#dumpSixteen", "#dumpSeventeen", "#dumpEighteen", "#dumpNineteen",];

var dumpIndex = 0;

// ajax to rotate through the different dumps

// $("body").on('click', function (){
// 	console.log("dump working");
// 	console.log(dumpIndex);
// 	$.ajax({
// 		url:"https://tripleogisel.github.io/brainWork-movers",
// 		context: document.body,
// 		dataType: "html"
// 	}).done(function(data){
// 		console.log(dumpIndex);
// 		var y = $(data).filter(dumps[dumpIndex+=1]).html();
// 		console.log(y);
// 		console.log(dumps[dumpIndex]);
// 		$(".brainBody").html(y);
// 	});
// });

// var slideShow = function(){
// 		$.ajax({
// 		url:"https://tripleogisel.github.io/brainWork-movers",
// 		context: document.body,
// 		dataType: "html"
// 	}).done(function(data){
// 		console.log(dumpIndex);
// 		var y = $(data).filter(dumps[dumpIndex+=1]).html();
// 		console.log(y);
// 		console.log(dumps[dumpIndex]);
// 		$(".brainSample").css('opacity',.25).animate({'opacity':1});
// 		$(".brainSample").html(y);
// 	});
// }
//
// setInterval(slideShow, 7000);
//
// console.log('main.js is loaded');
//
// $('img').on('click', function(){
// 	$().toggleClass("location");
// })
//
// $('.photo').on('click', function(){
// 	var para = $(this).children('p');
// 	$(para).toggleClass("location");
// })

// user work array
var projects = ["#projectOne", "#projectTwo", "#projectThree", "#projectFour"];

var index = 0;

$('.backward').addClass('disabled');


// user work buttons
// forward button
$('.forward').on('click', function(){
	console.log('clicked');
	console.log(index);
	$('.projectDisplay').addClass('hidden');
	$.ajax({
		url:"https://tripleogisel.github.io/userWork-movers",
		context: document.body,
		dataType: "html"
		}).done(function(data){
		if(index<3){
			// adds 1 to index
			index++;
			console.log(index);
			var x = $(data).filter(projects[index]).html();
			console.log(x);
			$('.projectDisplay').css('opacity',0).animate({'opacity':1});
			$('.projectDisplay').html(x);
			console.log(x);
			disableButton();
		}

	});

});


// backward button
$('.backward').on('click', function(){
	console.log('clicked');
	disableButton();
	console.log(index);
	$.ajax({
		url:"https://tripleogisel.github.io/userWork-movers",
		context: document.body,
		dataType: "html"
		}).done(function(data){
		if(index>0){
			// subtracts 1 from index
			index--;
			var x = $(data).filter(projects[index]).html();
			console.log(x)
			$('.projectDisplay').css('opacity',0).animate({'opacity':1});
			$('.projectDisplay').html(x);
			disableButton();
		}

	});

})

$('body').on('scroll', function(){
	console.log('yes');
$('.miniNavButton').addClass('scrolled');
}

// function to make buttons look like they're inactive
function disableButton(){
	if(index===0) {
		$('.backward').addClass('disabled');
		$('.backward').removeClass('smart');
	}

	if(index!=0) {
		$('.backward').removeClass('disabled');
	}

	if(index===3) {
		$('.forward').addClass('disabled');
	}

	if(index!=3) {
		$('.forward').removeClass('disabled');
	}
};


// subtitle for scrolling

var box = $('.subtitle');
var theWindow = $(window);

var scrollingBox = function () {
	console.log('scroll indeed');

	box.clearQueue();
	box.stop();

	box.fadeIn(10, function(){
		$(this).delay(10).fadeOut(10)
	});
};

theWindow.on('scroll', scrollingBox);

// $('.drank').on('click', scrollingBox);


// carousel animation on user work

theWindow.scroll(function(){
	var scrollLocation = theWindow.scrollTop();

	var darken = function () {
		$('.carousel').addClass('superDark');
		console.log("hey");
	}

	if(scrollLocation>50) {
		darken();
	} else if(scrollLocation<50) {
		$('.carousel').removeClass('superDark');
	}; return;
});


$()

// if (theWindow.scrollTop() > 200) {

// }


// var myWindow = $(window);
// var scrollPos = myWindow.scrollTop();
// var scrollBox = $('.subtitle');
// // var up = false;
// // var newscroll;

// $(myWindow).on('scroll', function(){
// 	// $('.subtitle').addClass('hidden');
// 	// $('.subtitle').toggleClass('hidden');
// 	// console.log('You\'re scrolling');
// 	// return false;

// 	if (myWindow.scrollTop() > scrollPos){
// 		scrollBox.fadeIn();
// 		console.log(myWindow.scrollTop);
// 		console.log(scrollPos);
// 	} else {
// 		scrollBox.fadeOut();
// 		console.log('scrolling');
// 	}

// 	scrollPos = myWindow.scrollTop();

// })

// var mywindow = $(window);
// var mypos = mywindow.scrollTop();

// myWindow.scroll(function () {
//     newscroll = myWindow.scrollTop();
//     if (newscroll > scrollPos && !up) {
//         $('.subtitle').stop().fadeIn();
//         up = !up;
//         console.log(up);
//     } else if(newscroll < scrollPos && up) {
//         $('.subtitle').stop().fadeOut();
//         up = !up;
//     }
//     mypos = newscroll;
// });

// var keyImages = ["images/image_1.jpeg", "images/image_2.jpeg", "images/image_3.jpeg", "images/image_4.jpeg"];

// var index = 0;

// $('img').on('mouseover', function(){
// 	if(index<3) {

// 	index+=1;
// 	}

// 	else if(index=3) {
// 		index=0;
// 	}

// 	$("img").attr("src", keyImages[index]);
// });
