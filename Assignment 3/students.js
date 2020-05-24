// You are not permitted to change this in any way
function Student(name, major, yearInSchool, club) {
  this.name = name; // string, (e.g. "Jim", "Pam", "Michael")
  this.major = major; // string, (e.g. "Computer Science", "Art", "Business")
  this.yearInSchool = yearInSchool; // int, (e.g. 1, 2, 3, 4)
  this.club = club; // string, (e.g. "Improv", "Art")

  this.logme = function logme(x){
		//Whether or not we log the club property
		if(x)
		{
			console.log(this.name + ' - ' + this.major + ' - ' + this.yearInSchool + ' - ' + this.club);
		}
		else{
			console.log(this.name + ' - ' + this.major + ' - ' + this.yearInSchool);
		}
  }
}

var students = [
  new Student("Pam", "Art", 2, "Art"),
  new Student("Michael", "Business", 4, "Improv"),
  new Student("Dwight", "Horticulture", 1, "Karate"),
  new Student("Jim", "Sports Science", 2, "Guitar"),
  new Student("Angela", "Accounting", 4, "Cat"),
  new Student("Toby", "Human Resources", 3, "Photography")
];

var printClub = 0;
/* This function sorts arrays using an arbitrary comparator. You pass it a comparator 
and an array of objects appropriate for that comparator and it will return a new array 
which is sorted with the largest object in index 0 and the smallest in the last index*/
function sortArr(comparator, array) {
  
  //Check if we are comparing club - will be used to fill in later
  printClub = 0;
  
  //Selection sort implementation
  var tempVal = 0;
  if(array.length > 1){
	for(var i = 0; i < array.length; i++){
		var minVal = i;
		for(var j = i; j < array.length; j++){
			if(comparator(array[minVal],array[j])){
				minVal = j;
			} else {
				//Do nothing - continue loop
			}
		}
		tempVal = array[i];
		array[i] = array[minVal];
		array[minVal] = tempVal;
	}
	
	//Weird logic because I managed to reverse the printing order in clubcomparator..
	if(printClub){
		var k = array.length-1;
		while(k>-1){
			array[k].logme(printClub);
			--k;
		}
	}
	else {
		for(i = 0; i < array.length; i++){
			array[i].logme(printClub);
		}
	}
  }
}

/* / * A comparator takes two arguments and uses some algorithm to compare them. If the first 
argument is larger or greater than the 2nd it returns true, otherwise it returns false.
Here is an example that works on integers*/
function exComparator( int1, int2){
  if (int1 > int2){
      return true;
  } else {
      return false;
  }
}

/* For all comparators if students are 'tied' according to the comparison rules then the order of 
those 'tied' students is not specified and either can come first*/

/* This compares two students based on their year in school. Sort in descending order.*/
function yearComparator(student1, student2) {
	printClub = 0;
	if (student1.yearInSchool < student2.yearInSchool ){
		return true;
	} else {
		return false;
	}
}

/* This compares two students based on their major. It should be case insensitive and 
makes which are alphabetically earlier in the alphabet are "greater" than ones that 
come later (from A-Z).*/
function majorComparator(student1, student2) {
	printClub = 0;
	if (student1.major > student2.major ){
		return true;
	} else {
		return false;
	}
	
}

/* This compares two students based on the club they're in. The ordering from "greatest" 
to "least" is as follows: improv, cat, art, guitar, (types not otherwise listed). 
It should be case insensitive. If two clubs are of equal type then the student who
has the higher year in school should be "greater."*/
function clubComparator(student1, student2) {
	
	//NOTE: Somehow managed to perfectly reverse the sorting logic in this algorithm
	//Added a catch in the printing logic to print the reverse of the array.
	
	printClub = 1;
	var ranking = [ 
		"Improv",
		"Cat",
		"Art",
		"Guitar",
		"Other"
	];
	var student1sort = 0;
	for( var i = 0; i < ranking.length; i++){
		if (ranking[i] === student1.club){
			student1sort = i;
			break;
		} else {
			student1sort = ranking.length - 1;
		}
	}
	
	var student2sort = 0
	for( var j = 0; j < ranking.length; j++){
		if (ranking[j] === (student2.club)){
			student2sort = j;
			break;
		} else {
			student2sort = ranking.length - 1;
		}
	}
	
	//Checker if both are "Other", default to year in school
	if(student1sort == 5 && student2sort == 5){
		if(student1.yearInSchool > student2.yearInSchool){
			return true;
		} else {
			return false;
		}
	}
	
	if (student1sort < student2sort ){
		return true;
	} else {
		return false;
	}
}

/* Your program should output the following to the console.log, including each of the opening and closing 
5 stars. All values in parenthesis should be replaced with appropriate values. To accomplish this, you will 
have to sort the array of students using each comparator and then loop through the array and and call logMe
on each student of the now-sorted array. If the argument is 'true' then it prints the student's name, major, 
year in school, and club affiliation. If the argument is 'false' then the club affiliation is ommited and 
just the student's name, major and year in school is logged. Please carefully note which sorted results require
the club to be displayed and which do not.

**********
The students sorted by year in school are:
(Name - Major - Year) // of the "greatest" student
...
(Name - Major - Year) // of the "least" student

**********
The students sorted by major are:
(Name - Major - Year) // of the "greatest" student
...
(Name - Major - Year) // of the "least" student

**********
The students sorted by club affiliation are:
(Name - Major - Year - Club) // of the "greatest" student
...
(Name - Major - Year - Club) // of the "least" student

**********

As an example of what is expected to be printed to the console with logMe being sent True for a single student:
Jim - Sports Science - 2 - Guitar

*/
console.log("**********");
console.log("The students sorted by year in school are:");
sortArr(yearComparator, students);
console.log("");
console.log("**********");
console.log("The students sorted by major are:");
sortArr(majorComparator, students);
console.log("");
console.log("**********");
console.log("The students sorted by club affiliation are:");
sortArr(clubComparator, students);
console.log("**********");
