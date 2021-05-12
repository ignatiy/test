function authenticate(login, password) {
	if (login === 'login' && password === 'password') {
		return "Welcome!s";
	} else {
		return "Login is incorrect!";
	}
}