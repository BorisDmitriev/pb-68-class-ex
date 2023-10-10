class Employee {
	constructor (firstname, lastname) {
		this.firstname = firstname
		this.lastname = lastname
		// Complete the code!
		this.fullname = this.firstname + " " + this.lastname
		this.email = (this.firstname + "." + this.lastname + "@company.com").toLowerCase()
	}


}