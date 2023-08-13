# freezeAndConst
Object.freeze() and const are both concepts in JavaScript that relate to immutability and protecting values from being changed. However, they serve different purposes and operate at different levels of data structure. Let's explore the differences between Object.freeze() and const:

    Object.freeze():
        Object.freeze() is a method provided by JavaScript that freezes an object, making it immutable. This means that once an object is frozen, you cannot add, remove, or modify its properties. Any attempt to make such changes will result in an error (in strict mode) or fail silently (in non-strict mode).
        It operates at the level of individual objects. After freezing an object, its properties cannot be changed, but the object itself (i.e., its reference) can still be assigned to a different variable.
        const:

    const is a keyword used to declare variables with a constant (unchanging) value. It ensures that the variable cannot be reassigned to a different value after its initial assignment. However, it does not make the value itself immutable. For objects and arrays, the contents of the object or array can still be modified.
    It operates at the variable level. Once you assign a value to a const variable, you cannot reassign a new value to that variable.
    In summary:

    Object.freeze() makes an entire object and its properties immutable, preventing changes to existing properties and addition of new properties.
    const makes a variable itself immutable, ensuring that it cannot be reassigned to a different value. However, for objects and arrays assigned to const, their contents can still be modified.

To achieve deep immutability (both object and its properties), you would need to use Object.freeze() on the object and recursively apply it to nested objects. Additionally, to ensure the immutability of values within an array, you might consider using techniques like the spread operator or libraries designed for immutability, such as Immutable.js or libraries like lodash.
