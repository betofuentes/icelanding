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

// To close clicking out of modal
window.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target == flex){
        modal.style.display = 'none';
    }
});

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
	Host: "smtp.gmail.com",
	Username : "6f.valdez.rodarte.miguel@gmail.com",
	Password : "Hola123456!",
	To : 'mike.281299@gmail.com',
	From : "6f.valdez.rodarte.miguel@gmail.com",
	Subject : "[" + reason + "] " + name + " desea ponerse en contacto con usted.",
	Body : "Nombre del interesado: " + name + "<br>Correo electrónico: " + client_email + "<br>Número telefónico: +52 " + client_number + "<br>Razón de contacto: " + reason + "<br>Comentario del interesado: " + body,
	}).then(
		message => alert("¡El correo ha sido mandado exitosamente! En breve nos pondremos en contacto con usted.")
	);
}



