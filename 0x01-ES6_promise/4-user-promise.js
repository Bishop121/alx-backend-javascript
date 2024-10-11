// using a prototype to call a promise
export default function signUpUser(firstName, lastName) {
	  return Promise.resolve({
		      firstName,
		      lastName,
		    });
}
