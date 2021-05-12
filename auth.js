function auth(login, password) {
	if (login === 'login' && password === 'password') {
		return "Is correct!"
	} else {
		return "Incorrect!"
	}
}