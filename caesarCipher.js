// Rewrite this cipher function without using a loop, using the help of array's map, join, and string's split method.
// function cipher(text) {
//   var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
//   var result = '';
//   for (var i = 0; i < text.length; i++) {
//     var chr = text[i];
//     var idx = alphabet.indexOf(chr.toUpperCase());
//     var newIdx = idx + 13;
//     if (newIdx >= alphabet.length) {
//       newIdx -= 26;
//     }
//     result += alphabet[newIdx];
//   }
//   return result;
// }
//
// // You can assume that the text is only one word, all letters are capitalized, and the offset is always 13
function mapAlphabet(chr) {
  var result = "";
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  var idx = alphabet.indexOf(chr.toUpperCase());
  var newIdx = idx + 13;
  if (newIdx >= alphabet.length) {
    newIdx -= 26;
  }
  result += alphabet[newIdx];
  return result;
}

function cipher(text) {
  return text.split('').map(mapAlphabet).join('');
}

var encrypted = cipher('GENIUS');
console.log(encrypted);
