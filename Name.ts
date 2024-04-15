let personName :string = 'muhammad anus ahmed';

let lowercase :string = personName.toLowerCase();
let uppercase :string = personName.toUpperCase();

function toTitleCase(str: string): string {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  }
  
  console.log(lowercase);
  console.log(uppercase);
  
  console.log(toTitleCase(personName));
  