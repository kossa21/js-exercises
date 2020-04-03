var numberOfStudents = 15;
var numberOfMentors = 8;
var total = numberOfMentors + numberOfStudents;

var percentStudents = numberOfStudents * 100 / total;
var percentMentors = numberOfMentors * 100 / total;

console.log("Percentage students: "+Math.round(percentStudents)+"%");
console.log("Percentage mentors: "+Math.round(percentMentors)+"%");

