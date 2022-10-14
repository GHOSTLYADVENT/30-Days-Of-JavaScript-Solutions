// ASSIGNMENT 1

let sti = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."

console.log(sti)

// ASSIGNMENT 2
let qu = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

console.log(qu)

// ASSIGNMENT 3

let a = '10', 
    b = 10;

console.log(a === b)

if (a !== b){
    a = parseInt(b)
    console.log (a === b)
}

// OR 

console.log(typeof('10') === 10)

// ASSIGNMENT 4

let ex = parseFloat('9.8')

console.log(ex=== b)

if (ex !== b){
    ex = parseInt(b)
    console.log (ex === b)
}

// OR 

console.log(typeof('10') === 10)

// ASSIGNMENT 5
let p = 'python and jargon'

console.log(p.match(/on/gi))


// ASSIGNMENT 6 

let sent = 'I hope this course is not full of jargon.'

console.log(p.match(/jargon/gi))

console.log(sent.includes('jargon'))

// ASSIGNMENT 7

let num_btw_zero_to_hund = Math.floor(Math.random() * 70)

console.log(num_btw_zero_to_hund)

// ASSIGNMENT 8

let new_num_btw_fifty_to_hund = Math.floor((Math.random() * 40) + 50)

console.log(new_num_btw_fifty_to_hund)

// ASSIGNMENT 9

let fnew_num_btw_zero_to_255 = Math.floor(Math.random() * 150)

console.log(fnew_num_btw_zero_to_255)

// ASSIGNMENT 10

let word = 'JavaScript', rand = Math.floor(Math.random() * 5), new_word = word[rand]

console.log(new_word)

// ASSIGNMENT 11 

console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')

// ASSIGNMENT 12 

let words = 'You cannot end a sentence with because because because is a conjunction', 
    sub = words.substr(31, 23).trim();
console.log(sub)
