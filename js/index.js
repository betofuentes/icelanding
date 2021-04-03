// Modal actions
let modal = document.getElementById('myModal');
let flex = document.getElementById('flex');
let open = document.getElementById('open');
let close = document.getElementById('close');

// To open
open.addEventListener('click', function(){
    modal.style.display = 'block';
});

// To close
close.addEventListener('click', function(){
    modal.style.display = 'none';
});

// Slider actions
const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");


slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next(){
	let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
	slider.style.marginLeft = "-200%";
	slider.style.transition = "all 0.5s";
	setTimeout(function(){
		slider.style.transition = "none";
		slider.insertAdjacentElement('beforeend', sliderSectionFirst);
		slider.style.marginLeft = "-100%";
	}, 500);
}

function Previous(){
	let sliderSection = document.querySelectorAll(".slider__section");
	let sliderSectionLast = sliderSection[sliderSection.length -1];
	slider.style.marginLeft = "0";
	slider.style.transition = "all 0.5s";
	setTimeout(function(){
		slider.style.transition = "none";
		slider.insertAdjacentElement('afterbegin', sliderSectionLast);
		slider.style.marginLeft = "-100%";
	}, 500);
}

btnRight.addEventListener('click', function(){
	Next();
});

btnLeft.addEventListener('click', function(){
	Previous();
});

//Function to slide automatically, 6000 = 6s
setInterval(() => {
	Next();
}, 6000);
 function check_email(email){
	var pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"; 
	 if(email.value.match(pattern))
	 {
		 sendEmail();
	 }else{
		alert("Parece que este correo no es válido.")
		document.getElementById("client_email").focus();
		return true;	
	 }
 }

 function sendEmail() {
	var name = document.getElementById("name").value;
	var client_email = document.getElementById("client_email").value;
	var body = document.getElementById("body").value;
	var reason = document.getElementById("id_razon").value;
	var client_number = document.getElementById("client_number").value;

	Email.send({
	SecureToken: "94b3d474-f479-4237-a3b1-91246a619ef1",
	/*Host: "smtp.gmail.com",
	Username : "6f.valdez.rodarte.miguel@gmail.com",
	Password : "Hola123456!", 
	TODO: rEEMPLAZAR POR CREDENCIALES REALES AL FINAL
	*/
	To : 'mike.281299@gmail.com',
	From : "6f.valdez.rodarte.miguel@gmail.com",
	Subject : "[" + reason + "] " + name + " desea ponerse en contacto con usted.",
	Body : "Nombre del interesado: " + name + "<br>Correo electrónico: " + client_email + "<br>Número telefónico: +52 " + client_number + "<br>Razón de contacto: " + reason + "<br>Comentario del interesado: " + body,
	}).then(
		message => alert("¡El correo ha sido mandado exitosamente! En breve nos pondremos en contacto con usted.")
	);
}



