function assert(value, desc) {
  value ? console.log(`%c ${desc} PASS!`, 'color: green') 
        : console.log(`%c ${desc} FAIL!`, 'color: red');
}

function invalid(string) {
  const alphabetsAndSpace = /^[a-zA-Z\u0080-\u00FF ]+$/;
  if(!string || !string.trim().match(alphabetsAndSpace)) return true;
  return false;
}

function lengthOfLastWord(phrase) {
  if(invalid(phrase)) return 0;

  return lastWordOf(phrase, ' ').length;
}

function lastWordOf(phrase, splitBy) {
  const splitted = phrase.trim().split(splitBy);
  return splitted[splitted.length - 1];
}

assert(lengthOfLastWord("") == 0, "");
assert(lengthOfLastWord("itanor") == 6, "");
assert(lengthOfLastWord("itanor José") == 4, "");
assert(lengthOfLastWord("itanor strapazzoñ") == 10, "");
assert(lengthOfLastWord("Ita noR strapazzon") == 10, "");
assert(lengthOfLastWord(" itanor josé") == 4, "");
assert(lengthOfLastWord(" itanor strapazzön ") == 10, "");
assert(lengthOfLastWord(" john   doe ") == 3, "");
assert(lengthOfLastWord(" John   d o  e ") == 1, "");
assert(lengthOfLastWord("5John   d o  e ") == 0, "");
assert(lengthOfLastWord(" John   d o  e -") == 0, "");

