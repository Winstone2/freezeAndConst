const name = "Alice";
name = "Bob";  // This will result in an error because you're trying to reassign a const variable

const numbers = [1, 2, 3];
numbers.push(4);   // This will work, as it modifies the contents of the array
numbers[0] = 5;    // This will work, as it modifies the contents of the array
