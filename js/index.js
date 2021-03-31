function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "6f.valdez.rodarte.miguel@gmail.com",
	Password : "Hola123456!",
	To : 'alberto.fuentesco@gmail.com',
	From : "6f.valdez.rodarte.miguel@gmail.com",
	Subject : "Form.header",
	Body : "Form.body",
	}).then(
		message => alert("mail sent successfully")
	);
}