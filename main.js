
// -----right click disabled




//Disable right mouse click Script


window.addEventListener('contextmenu', function (e) {
  document.body.innerHTML += ''
  e.preventDefault();
}, false);




//paste this code under the head tag or in a separate js file.
	// Wait for window load
	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
	});




	// 




let post1 = document.querySelector('.post');
let frame1 = document.querySelector('.imagebox');
console.log(post1);
if(post1) {
	post1.addEventListener(
		'mouseover', function() {

		frame1.setAttribute("style", "display:block; ");
		}
	);
}

if(post1) {
post1.addEventListener(
		'mouseleave', function() {
		frame1.setAttribute("style", "display:none;");
		
		}
	);
}

//-----------------

let post2 = document.querySelector('.post1');
let frame2 = document.querySelector('.imagebox1');
console.log(post2);
if(post2) {
	post2.addEventListener(
		'mouseover', function() {

		frame2.setAttribute("style", "display:block;");
		}
	);
}

if(post2) {
post2.addEventListener(
		'mouseleave', function() {
		frame2.setAttribute("style", "display:none;");
		
		}
	);
}


//--------
let post3 = document.querySelector('.post2');
let frame3 = document.querySelector('.imagebox2');
console.log(post2);
if(post3) {
	post3.addEventListener(
		'mouseover', function() {

		frame3.setAttribute("style", "display:block;");
		}
	);
}

if(post3) {
post3.addEventListener(
		'mouseleave', function() {
		frame3.setAttribute("style", "display:none;");
		
		}
	);
}

//--------
let post4 = document.querySelector('.post3');
let frame4 = document.querySelector('.imagebox3');
console.log(post4);
if(post4) {
	post4.addEventListener(
		'mouseover', function() {

		frame4.setAttribute("style", "display:block;");
		}
	);
}

if(post4) {
post4.addEventListener(
		'mouseleave', function() {
		frame4.setAttribute("style", "display:none;");
		
		}
	);
}
//--------
let post5 = document.querySelector('.post4');
let frame5 = document.querySelector('.imagebox4');
console.log(post5);
if(post5) {
	post5.addEventListener(
		'mouseover', function() {

		frame5.setAttribute("style", "display:block;");
		}
	);
}

if(post5) {
post5.addEventListener(
		'mouseleave', function() {
		frame5.setAttribute("style", "display:none;");
		
		}
	);
}
//--------
let post6 = document.querySelector('.post5');
let frame6 = document.querySelector('.imagebox5');
console.log(post6);
if(post6) {
	post6.addEventListener(
		'mouseover', function() {

		frame6.setAttribute("style", "display:block;");
		}
	);
}

if(post6) {
post6.addEventListener(
		'mouseleave', function() {
		frame6.setAttribute("style", "display:none;");
		
		}
	);
}
//--------
let post7 = document.querySelector('.post6');
let frame7 = document.querySelector('.imagebox6');
console.log(post7);
if(post7) {
	post7.addEventListener(
		'mouseover', function() {

		frame7.setAttribute("style", "display:block;");
		}
	);
}

if(post7) {
post7.addEventListener(
		'mouseleave', function() {
		frame7.setAttribute("style", "display:none;");
		
		}
	);
}
//first post 


function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


// -----right click disabled




//Disable right mouse click Script


window.addEventListener('contextmenu', function (e) {
  document.body.innerHTML += ''
  e.preventDefault();
}, false);
