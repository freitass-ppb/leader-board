## Selected Questions

`1 - JavaScript` What do you think it will be printed into the console?

```javascript
const isEqual = (a, b) => {
    if (a === b) {
        return "Option 1";
    } else if (a == b) {
        return "Option 2";
    } else {
        return "Option 3";
    }
}

console.log(isEqual(2, "2"), isEqual("" + 2, "2"));
```

- [ ] `Option 1 Option 2`
- [x] `Option 2 Option 1`
- [ ] `Option 3 Option 1`
- [ ] `Option 2 Option 3`

---

`2 - JavaScript` Select the correct statements about synchronous and asynchronous functions?
- [ ] Both types block the execution of the code until it completes its execution
- [x] Asynchronous functions run in background letting the code to continue its execution
- [ ] Both types don’t block the execution of the code until it completes its execution
- [x] Synchronous functions block the code from executing until the function has completed its task

---

`3 - JavaScript` What do you think it would be printed to the console?

```javascript
const a = [1, 2, 3];
const b = a;

b.push(4);

console.log(a, b);
```

- [ ] `[1, 2, 3] [1, 2, 3, 4]`
- [X] `[1, 2, 3, 4] [1, 2, 3, 4]`
- [ ] `[1, 2, 3, 4] [1, 2, 3]`
- [ ] Error

---

`4 - JavaScript` What will be printed to the console?

```javascript
const a = [1, 2, 3];
const b = [...a];

b.push(4);

console.log(a, b);
```

- [X] `[1, 2, 3] [1, 2, 3, 4]`
- [ ] `[1, 2, 3, 4] [1, 2, 3, 4]`
- [ ] `[1, 2, 3, 4] [1, 2, 3]`
- [ ] Error

---

`5 - CSS` Which of the following is not a valid value for the `display` property in CSS?
- [ ] `block`
- [ ] `inline`
- [ ] `revert`
- [x] `visible`

---

`6 - HTML` Which HTML tag is used to define a paragraph?
- [x] `<p>`
- [ ] `<div>`
- [ ] `<span>`
- [ ] `<h1>`

---

`7 - HTML` Which of these statements is true?
- [x] `display: none` hides the element and takes no space
- [ ] `visibility: hidden` is not visible and takes no space
- [ ] `display: none` hides the element and maintains its space
- [ ] `visibility: hidden` is not visible and is removed from the DOM

---

`8 - JavaScript` Programming question

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




