/*
 * Write a method to replace all the spaces in a string with ‘%20’. 
 * You may assume that the string has sufficient space 
 * (or allocated memory) at the end to hold the additional characters.
 */

function assert(value, desc) {
  value ? console.log(`%c ${desc} PASS!`, 'color: green') 
        : console.log(`%c ${desc} FAIL!`, 'color: red');
}

function doIt(string, splitBy, joinBy) {
  if(!string || !string.trim()) return "";

  return string
    .trim()
    .split(splitBy)
    .join(joinBy);
}

function urlifyString(string) {
  return doIt(string, ' ', '%20');
}
assert(urlifyString("Itanor José Strapazzon") == "Itanor%20José%20Strapazzon", "urlify for 'Itanor José Strapazzon'");
assert(urlifyString("John Doe") == "John%20Doe", "urlify for 'John Doe'");
assert(urlifyString("Marie Stephens ") == "Marie%20Stephens", "urlify for 'Marie Stephens '");
assert(urlifyString(" ") == "", "urlify for ' '");
assert(urlifyString("Bob  Dylan") == "Bob%20%20Dylan", "urlify for 'Bob  Dylan'");
assert(urlifyString("a") == "a", "urlify for 'a'");
assert(urlifyString("Some  Thing From  Hell") == "Some%20%20Thing%20From%20%20Hell", "urlify for 'Some  Thing From  Hell'");

function unUrlifyString(string) {
  return doIt(string, '%20', ' ');
}
assert(unUrlifyString("Itanor%20José%20Strapazzon") == "Itanor José Strapazzon", "unurlify for 'Itanor%20José%20Strapazzon'");
assert(unUrlifyString("John%20Doe") == "John Doe", "unurlify for 'John%20Doe'");
assert(unUrlifyString("Marie%20Stephens") == "Marie Stephens", "unurlify for 'Marie%20Stephens'");
assert(unUrlifyString(" ") == "", "unurlify for ' '");
assert(unUrlifyString("Bob%20%20Dylan") == "Bob  Dylan", "unurlify for 'Bob%20%20Dylan'");
assert(unUrlifyString("a") == "a", "unurlify for 'a'");
assert(unUrlifyString("Some%20%20Thing%20From%20%20Hell") == "Some  Thing From  Hell", "unurlify for 'Some%20%20Thing%20From%20%20Hell'");
