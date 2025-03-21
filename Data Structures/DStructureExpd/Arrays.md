## **Arrays**
```javascript 
const fiveStudents = ["Blessing", "Asantewaa", "Frema", "Peprah", "Agyei" ]

function findStudents(allStudents, studentName) {
  for (let i = 0; i < allStudents.length; i++) {
    if (allStudents[i] === studentName) {
      console.log(`${studentName} is in here`)
    } else {
      console.log(`${studentName} is not here`)
    }
  }
}

findStudents(fiveStudents, "Asantewaa")```


```javascript
let a = []

// adding and removing elements from an array
a.push('Whitna', 'james', 2, 5)
a.pop() 
a.shift()
a.unshift('Man')
a.splice(1, 2, 'Love', 'lovely') 

//transforming arrays
let result = a.map(item => item.length) 
a.reverse()

console.log(result, a) 
```  

```javascript
for(let i = 0; i < 4; i++) {
  console.log(i);
}

// palindromes
let rrev = "Gorl"

let arl = rrev.split("").reverse().join("")

if (arl === rrev) {
    console.log(`${arl} is a ${rrev} palindrome`) 
 } else{
     console.log(`${arl} is not a ${rrev} palindrome`)
 }
 ```

// sorting arrays
```javascript
let letters = []

function name(pal) {
   pal.push("love", "greatness", "failure", "happiness", "life")
   for (let i = 0; i < pal.length; i++) {
      if(i === 2) {
         continue
      }
      console.log(pal[i]);
   }
}

name(letters)
```

