//'FFFHJJF' => '3F1H2J1F'
//'ZXCVZZ' => '1Z1X1C1V2Z'

///console.log('FFFHJJF'.match(/(\w)\1*/g).reduce((ac,e)=>ac + e.length + e[0],'' ))

const alternateUpercase = (s) =>
  s.replace(/\w/g, (m, i) => {
    return i % 2 !== 0 ? m.toUpperCas() : m;
  });

"".toLocaleLowerCase();

function alt(s) {
  return [...s]
    .map((m, i) => (i % 2 !== 0 ? m.toLocaleUpperCase() : m))
    .join("");
}

let s = "<div><div>";

function checkDiv(s, index) {
  let test = "div>";
}

function fixDivTags(s) {
  let f = true;
  return s.replace(/<div>/g, () => {
    f = !f;
    return f ? "</div>" : "<div>";
  });
}

function fixDivTags2(s) {
   let f = true;
   for (let i = 0; i < s.length; ) {
     if (s[i] === "<" && s.slice(i, i + 5) === "<div>") {
       f = !f;
       if (f) {
         s = s.slice(0, i) + "</div>" + s.slice(i + 5);
         i += 6;
       } else i+=5;
     } else i++;
   }
   return s;
 }

console.log(fixDivTags2(s));
console.log(fixDivTags(s));
