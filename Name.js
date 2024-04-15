var personName = 'muhammad anus ahmed';
var lowercase = personName.toLowerCase();
var uppercase = personName.toUpperCase();
function toTitleCase(str) {
    return str.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
}
console.log(lowercase);
console.log(uppercase);
console.log(toTitleCase(personName));
