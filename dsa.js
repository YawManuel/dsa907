
   // Data Structures (Arrays)
    /* Stacks */
    
    // function of: push, pop, peek, length
    // Working with Palindromes(words that can written in both reverse forms of it)
    
    let letters = [];
    
    let word = "racecar";
    
    let rword = "";
    
    // putting letters of word into stack
    for (let i = 0; i < word.length; i++) {
        letters.push(word[i]);
    }
    
    // pop off the stack in reverse order
    for (var i = 0; i < word.length; i++) {
        rword += letters.pop();
    } 
    
    if (rword === word) {
        console.log(word + " is a palindrome.");
    } else {
        console.log(word + " is not a palindrome.");
    }
    
    /* Sets */
    // Sets are mainly first in last out
    
    /* Queues */
    // Queues are mainly first in first out
    
    /* Binary Search Tree */
    
    /* Hash Tables */
    
    /* Linked List */ 
    
    /* Trie */
    
    /* Heap */ 
    
    /* Graphs: Breath-first search */
    
    /* Graphs: Dept-first search */ 

                  // Algorithms
     /* converting temperatures */
     function convertToF(celsius) {
        let fahrenheit = (celsius * (9/5)) + 32;
          return fahrenheit;
      }
    
     convertToF(-30);
    
    /* Sentence Capitalization */
    function stcap(st) {
        return st.toLowerCase().split(" ").map(st[0].toUpperCase + st.slice(1)).join(" ")    
     }
      console.log(stcap("helLo therE"))
    
    
     
      /* reversing strings */
      function reverseString(str) {
        return str.split("").reverse().join("");
      }
    
      reverseString("hello");
    
      /* factorizing numbers */
     function factorialize(num) {
      let result = num;
      if(num === 0 || num === 1) 
         return 1;
      while (num > 1) {
        num--;
        result *= num;
      }
      return result;
     }
    
     factorialize(5)
    
    //  Play Sandbox
     let a = 11;
     let b = 17;
    
     while (a < b) {
      alert(a); 
      a++ 
     }
     
     (a > b) ? alert("sorry things didnt work") : alert("All the calculations are ok");
      
     if(a > b) {
       alert("all the calculation is ok")
     } else {
       alert("sorry things didnt work")
     }
    
    
     let rrev = "Gorl"
     
     let arl = rrev.split("").reverse().join("")
    
     if (arl === rrev) {
        console.log(`${arl} is a palindrome`) 
     } else{
         cosole.log(`${arl} is not a palindrome`)
     }
    
    
    
    
    
    