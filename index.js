let total = document.getElementById('total');
// adding data to localstorage
const attToCartBtn = document.getElementsByClassName('attToCart');
for (let i = 0; i < attToCartBtn.length; i++) {
	attToCartBtn[i].addEventListener("click", function (e) {

		e.target.nextElementSibling.textContent++;
		let pu = e.target.previousElementSibling.firstChild.nextElementSibling;
		total.textContent = parseInt(total.textContent) + parseInt(pu.textContent);

	});
}


const minus = document.getElementsByClassName('minus');
for (let i = 0; i < minus.length; i++) {
	minus[i].addEventListener("click", function (e) {
		if (e.target.previousElementSibling.textContent > 0) {
			e.target.previousElementSibling.textContent--;
			let pu = e.target.previousElementSibling.previousElementSibling.previousElementSibling.firstChild.nextElementSibling;
			total.textContent = parseInt(total.textContent) - parseInt(pu.textContent);
		}
	});
}


const Delete = document.getElementsByClassName('delete');
for (let i = 0; i < Delete.length; i++) {
	Delete[i].addEventListener("click", function (e) {
		let qtt = e.target.previousElementSibling.previousElementSibling.textContent;
 		let pu = e.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.firstChild.nextElementSibling.textContent;
		if (qtt > 0) {
 			total.textContent = total.textContent - (qtt * pu);
			e.target.previousElementSibling.previousElementSibling.textContent = '0';
 		}
			
		
	});
}

function togglet() {
	var btn = document.getElementById('btn');
		if (btn.classList.contains("far")) {
			btn.classList.remove("far");
			btn.classList.add("fas");
		} else {
			btn.classList.remove("fas");
			btn.classList.add("far");
		}

	
}



const heart = document.getElementsByClassName('far fa-heart');
for (let i = 0; i < heart.length; i++) {
	heart[i].addEventListener("click", function (e) {
		if (e.target.classList.contains("far")) {
			
			e.target.classList.remove("far");
			e.target.classList.add("fas");
		 } else {
			e.target.classList.remove("fas");
			e.target.classList.add("far");
		}
	});
}