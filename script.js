function firstWord(s) {
	 s = s.trim();
  let spaceIndex = s.indexOf(" ");
  
  // If no space is found, return the entire string
  return spaceIndex === -1 ? s : s.substring(0, spaceIndex);
}

  // your code here


// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
