1. The Variable Trio: var, let, and const
Think of these as the rules for how you name and store information.

 1.1 var: This is the "old school" way. It is function-scoped, meaning if you create it inside a function, it stays there, but it ignores other blocks like if statements or loops. You can redeclare it and change it whenever you want, which often leads to accidental bugs.

 1.2 let: The modern standard for variables that need to change. It is block-scoped, so it stays strictly within the curly braces {} where it was born. You can change its value, but you can’t "re-create" it in the same scope.

 1.2 const: Short for "constant." Like let, it is block-scoped, but once you give it a value, you cannot point it to a new value later. It’s perfect for things that should stay the same, like a fixed setting or a URL.

2. The Spread Operator (...)

Imagine you have a backpack (an array) full of items. The spread operator unpacks those items so you can put them into a new backpack or a different container. Instead of moving the whole bag, you are spreading out the individual contents. It’s a clean way to copy data without making a mess of the original source.

3. map(), filter(), and forEach()
These are three different ways to handle a list of items:

 3.1 forEach(): This is like a simple "to-do" list. It goes through every item and performs an action, but it doesn't give you anything back. It just "does" the work.

 3.2 map(): This is the "transformer." It goes through your list, changes every item based on your instructions, and hands you a brand-new list with those changes. The original list stays exactly the same.

 3.3 filter(): This is the "security guard." It looks at your list and checks each item against a rule. If the item passes, it goes into a new list. If it doesn't, it gets left behind.

4. Arrow Functions

In the past, writing a function required a specific, somewhat wordy structure. Arrow functions are a "shorthand" version. They use a symbol that looks like an arrow to separate the input from the result. They are popular not just because they are shorter to type, but because they handle the "context" (the connection to the surrounding code) more predictably than traditional functions.

5. Template Literals

Before these existed, joining text and variables together was like a puzzle involving many plus signs and quote marks. Template literals use backticks instead of standard quotes. They allow you to write text naturally and "plug in" your variables directly into the sentence. They also allow you to hit "Enter" and create text on a new line without the code breaking.