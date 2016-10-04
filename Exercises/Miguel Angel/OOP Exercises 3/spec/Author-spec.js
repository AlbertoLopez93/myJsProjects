"use strict"

let Author = require("../Author");

describe("Testing Author", function (){
	let newAuthor = new Author({name: "Miguel Delgado", email: "miguedelgado1324@gmail.com", gender: "m"});
	it("Should create an Author", function(){
		expect(newAuthor instanceof Author).toBe(true);
	});
	it("Get methods should work", function(){
		expect(newAuthor.getName()).toBe("Miguel Delgado");
		expect(newAuthor.getEmail()).toBe("miguedelgado1324@gmail.com");
		expect(newAuthor.getGender()).toBe("m");
	});
	it("Method setEmail should work", function(){
		newAuthor.setEmail("migueldelgado1992@hotmail.com");
		expect(newAuthor.getEmail()).toBe("migueldelgado1992@hotmail.com");
	});
	it("Method toString should work", function(){
		let newAuthor = new Author({name: "Miguel Delgado", email: "miguedelgado1992@hotmail.com", gender: "m"});
		let result = "Author[name=Miguel Delgado, email=miguedelgado1992@hotmail.com, gender=m]";
		expect(newAuthor.toString()).toBe(result);
	});
});