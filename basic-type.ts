let studentFullNames =  [

["Alice", "Smith"],

["Bob", "Johnson"],

["John", "Riley"],

["Bob", "Marley"]

];

console.log(studentFullNames[0])
console.log(studentFullNames[3])
console.log(studentFullNames[0][0])
console.log(studentFullNames[0][1])

console.log(studentFullNames.push(["Lara", "Jackson"]));

studentFullNames[2][0] = "Jordan";

for (let i = 0; i < studentFullNames.length; i++) {
    console.log(`${i + 1}. ${studentFullNames[i][0]} ${studentFullNames[i][1]}`)
}
console.log(studentFullNames.length)