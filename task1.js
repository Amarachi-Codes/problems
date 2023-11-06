// Given an amount between 0 and 10,000 Naira (inclusive) and assuming that the ATM wants to use as few bills as possible,
//  determinate the minimal number of 100, 20, 9 and 1 Naira bills the ATM needs to dispense (in that order).

function dispense(amt){
	let minimal = [100, 20, 9, 1]
	let result = []
	for(let i =0; i < minimal.length; i++){
		let values = minimal[i]
		result.push(amt/values)

	}return result
}console.log(dispense(1000))



//  Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
// The first word within the output should be capitalized only if the original word was capitalized  (known as Upper Camel Case,
// 	 also often referred to as Pascal case).

// EXAMPLES:
//     A) "the-stealth-warrior" gets converted to "theStealthWarrior"
//     B) "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function camelCasing(str){
	let result =""
	let remainingstr= ""
	for(let i = 0; i < str.length; i++){
		let char = str.charAt(i)
		if(char.includes("-") || char.includes("_")){
			char.split("-")
			
			
			result+=char
	}else{
		remainingstr+=char
	}
	}return remainingstr

} console.log(camelCasing("The_stealth_warrior"))