## Selected Questions

`1 - JavaScript` What do you think it will be printed into the console?

```javascript
const a = 2;
const b = "2";

if (a == b) {
    console.log("Option 1");
} else if (a === b) {
    console.log("Option 2");
} else {
    console.log("Option 3")
}

- [ ] Option 1
- [ ] Option 2
- [ ] Option 3
- [ ] Nothing will be printed
```

---

`2 - JavaScript` What’s the difference between synchronous and asynchronous functions (select the correct responses)?  
    - [ ] Both types block the execution of the code until it completes its execution  
    - [ ] Asynchronous functions run in background letting the code to continue its execution  
    - [ ] Both types don’t block the execution of the code until it completes its execution  
    - [ ] Synchronous functions block the code from executing until the function has completed its task  

---

`3 - JavaScript` What do you think it would be printed to the console?

```javascript
const a = [1, 2, 3];
const b = a;

b.push(4);

console.log(a);
console.log(b);
```

- [ ] [1, 2, 3], [1, 2, 3, 4]
- [X] [1, 2, 3, 4], [1, 2, 3, 4]
- [ ] [1, 2, 3, 4], [1, 2, 3]
- [ ] Error

---

`4 - JavaScript` What will be printed to the console?

```javascript
const a = [1, 2, 3];
const b = [...a];

b.push(4);

console.log(a);
console.log(b);
```

- [X] [1, 2, 3], [1, 2, 3, 4]
- [ ] [1, 2, 3, 4], [1, 2, 3, 4]
- [ ] [1, 2, 3, 4], [1, 2, 3]
- [ ] Error

---

`5 - JavaScript` Programming question
    - See the code

---









## Other Questions

- `HTML` Please explain what are the HTML attributes `id` and `class` used for and the difference between them
- `CSS` How do you apply CSS to a specific unique HTML element? What if you want to apply to a group of HTML elements?

- `JavaScript` Can you explain what is `hoisting` in JavaScript? What’s the result of the following code snippets:

```json
greet();

function greet() {
	console.log("Hello! :)")
}
```

```json
console.log(companyName);

var companyName = "Blip";

console.log(companyName);
```

- `JavaScript` Can you explain the differences between `var`, `let` and `const`? **(use code gaps?)**
    - Scope of variables
    - Redeclaration and reassignment
    - Hoisting




