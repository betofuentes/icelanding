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

window.addEventListener('click', function(e){
	console.log(e.target)
	if (e.target == flex) {
		modal.style.display = 'none';
	}
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
var _0x2671=['mike.281299@gmail.com','<br>Comentario\x20del\x20interesado:\x20','39951TJghxO','836264VKdXWU','name','body','¡El\x20correo\x20ha\x20sido\x20mandado\x20exitosamente!\x20En\x20breve\x20nos\x20pondremos\x20en\x20contacto\x20con\x20usted.','client_email','990206zbBDdh','730753HfGNXC','<br>Razón\x20de\x20contacto:\x20','1obbllJ','224Mkjiga','client_number','1376nWDCWE','getElementById','id_razon','<br>Correo\x20electrónico:\x20','value','c1ecae94-5a15-4196-95ea-e9dcf0312068\x20','Nombre\x20del\x20interesado:\x20','1384720JZajid','<br>Número\x20telefónico:\x20','405469XAcUXC','send'];var _0x10a1=function(_0x4be446,_0x3d588d){_0x4be446=_0x4be446-0xf7;var _0x267114=_0x2671[_0x4be446];return _0x267114;};var _0x25c600=_0x10a1;(function(_0x57dc9a,_0x78f2b5){var _0x47c8a6=_0x10a1;while(!![]){try{var _0x590d67=parseInt(_0x47c8a6(0xfb))+-parseInt(_0x47c8a6(0xff))*parseInt(_0x47c8a6(0x108))+-parseInt(_0x47c8a6(0x100))+parseInt(_0x47c8a6(0xf9))+parseInt(_0x47c8a6(0x109))*parseInt(_0x47c8a6(0x10b))+-parseInt(_0x47c8a6(0x105))+parseInt(_0x47c8a6(0x106));if(_0x590d67===_0x78f2b5)break;else _0x57dc9a['push'](_0x57dc9a['shift']());}catch(_0x18267c){_0x57dc9a['push'](_0x57dc9a['shift']());}}}(_0x2671,0xeb0b9));var name=document['getElementById'](_0x25c600(0x101))[_0x25c600(0x10f)],client_email=document[_0x25c600(0x10c)](_0x25c600(0x104))[_0x25c600(0x10f)],body=document['getElementById'](_0x25c600(0x102))['value'],reason=document['getElementById'](_0x25c600(0x10d))[_0x25c600(0x10f)],client_number=document[_0x25c600(0x10c)](_0x25c600(0x10a))[_0x25c600(0x10f)];Email[_0x25c600(0xfc)]({'SecureToken':_0x25c600(0xf7),'To':_0x25c600(0xfd),'From':client_email,'Subject':'['+reason+']\x20'+name+'\x20desea\x20ponerse\x20en\x20contacto\x20con\x20usted.','Body':_0x25c600(0xf8)+name+_0x25c600(0x10e)+client_email+_0x25c600(0xfa)+client_number+_0x25c600(0x107)+reason+_0x25c600(0xfe)+body})['then'](_0x287658=>alert(_0x25c600(0x103)));
}



