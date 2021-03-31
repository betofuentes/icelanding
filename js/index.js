 function sendEmail() {
	var name = document.getElementById("name").value;
	var client_email = document.getElementById("client_email").value;
	var body = document.getElementById("body").value;
	var reason = document.getElementById("id_razon").value;

	Email.send({
	Host: "smtp.gmail.com",
	Username : "6f.valdez.rodarte.miguel@gmail.com",
	Password : "Hola123456!",
	To : 'mike.281299@gmail.com',
	From : "6f.valdez.rodarte.miguel@gmail.com",
	Subject : "Form.header",
	Body : "Nombre del interesado: " + name + "\n Contacto: " + client_email + "Razón de contacto: " + reason + "Comentario del interesado: " + body,
	}).then(
		message => alert("mail sent successfully")
	);
}