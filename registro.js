const form = document.getElementById('form');
const usuario = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	const usuarioValue = usuario.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
  
	if(usuarioValue === '') {
	  setErrorFor(usuario, 'El usuario no puede estar en blanco');
	  return false;
	} else {
	  setSuccessFor(usuario);
	}
  
	if(emailValue === '') {
	  setErrorFor(email, 'No puede dejar el email en blanco');
	  return false;
	} else if (!isEmail(emailValue)) {
	  setErrorFor(email, 'No ingresó un correo válido');
	  return false;
	} else {
	  setSuccessFor(email);
	}
  
	if(passwordValue === '') {
	  setErrorFor(password, 'La contraseña no puede estar en blanco');
	  return false;
	} else {
	  setSuccessFor(password);
	}
  
	if(password2Value === '') {
	  setErrorFor(password2, 'La contraseña no puede estar en blanco');
	  return false;
	} else if(passwordValue !== password2Value) {
	  setErrorFor(password2, 'Las contraseñas no coinciden');
	  return false;
	} else {
	  setSuccessFor(password2);
	}
  
	return true;
  }

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function validarIngreso() {
	if (checkInputs()) {
	  alert("Se ha registrado correctamente");
	  return true;
	} else {
	  alert("Rellene correctamente todos los campos");
	  return false;
	}
  }
  
  form.addEventListener('submit', e => {
	e.preventDefault();
	validarIngreso();
  });


