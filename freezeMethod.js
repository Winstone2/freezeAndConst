const person = { name: "Alice" };
Object.freeze(person);

person.name = "Bob";  // This change will not take effect; person.name is still "Alice"
person.age = 30;      // This property addition will not take effect
person.name = "Alice";