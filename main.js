



let logo = document.querySelector('.sitename');
let image = document.querySelector('.imagebox');

if(logo) {
	logo.addEventListener(
		'mouseover', function() {
				image.style.display = 'block';
				

		}
	);
}

if(logo) {
logo.addEventListener(
		'mouseleave', function() {
				image.style.display = 'none';
				
		}
	);
}

// `url('https://res.cloudinary.com/dyag5tn5v/image/upload/v1617386021/modern-interior-design-streamlined-furniture-in-a-formal-living-room-lauren-a_qnn9ke.webp')`;




let post1 = document.querySelector('.post');
let frame1 = document.querySelector('.imagebox');
console.log(post1);
if(post1) {
	post1.addEventListener(
		'mouseover', function() {

		frame1.setAttribute("style", "display:block;");
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



//first post 


function openNav() {
  document.getElementById("myNav").setAttribute("style", "display:flex; justify-content:center;");
}

function closeNav() {
  document.getElementById("myNav").setAttribute("style", "display:block;");
}



