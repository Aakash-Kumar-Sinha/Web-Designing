# Frontend Development Cheat Sheet

---

# HTML Cheat Sheet

## Basic Structure

```html
<!DOCTYPE html>
<html>

<head>
    <title>Title</title>
</head>

<body>

</body>

</html>
```

---

## Common Tags

| Tag | Use |
|------|-----|
| h1-h6 | Headings |
| p | Paragraph |
| a | Link |
| img | Image |
| ul/ol | Lists |
| table | Tables |
| form | Forms |
| div | Block container |
| span | Inline container |

---

## Form Tags

```html
<form>

<input type="text">

<textarea></textarea>

<button>Submit</button>

</form>
```

---

# CSS Cheat Sheet

## CSS Syntax

```css
selector {

property: value;

}
```

---

## Selectors

```css
element {}

.class {}

#id {}
```

---

## Box Model

```text
Content
 ↓
Padding
 ↓
Border
 ↓
Margin
```

---

## Flexbox

```css
display: flex;

justify-content: center;

align-items: center;
```

---

## Common Properties

```css
color

background

font-size

width

height

margin

padding

border
```

---

# JavaScript Cheat Sheet

## Variables

```javascript
let name = "John";

const age = 20;
```

---

## Data Types

```text
String
Number
Boolean
Null
Undefined
Object
Array
```

---

## Function

```javascript
function greet(){

console.log("Hello");

}
```

---

## Array Methods

```javascript
push()

pop()

map()

filter()

forEach()
```

---

## Object

```javascript
let user = {

name:"John",

age:20

};
```

---

## DOM

```javascript
document.getElementById()

document.querySelector()
```

---

## Events

```javascript
element.addEventListener(
"click",
function(){

}
);
```

---

## ES6

```javascript
const add = (a,b) => a+b;

let {name} = user;

let newArray = [...array];
```

---

## Async JavaScript

```javascript
async function data(){

let result = await fetch();

}
```

---

# Bootstrap Cheat Sheet

## CDN

```html
<link
href="bootstrap.css"
rel="stylesheet">
```

---

## Container

```html
<div class="container">

</div>
```

---

## Grid

```html
<div class="row">

<div class="col-md-6">

</div>

</div>
```

---

## Buttons

```html
<button class="btn btn-primary">

Button

</button>
```

---

## Cards

```html
<div class="card">

</div>
```

---

## Navbar

```html
<nav class="navbar">

</nav>
```

---

## Forms

```html
<input class="form-control">
```

---

## Utilities

```text
mt = margin top

mb = margin bottom

p = padding

d-flex = flexbox

text-center = center text
```

---

# Quick Revision

```text
HTML → Structure

CSS → Styling

JavaScript → Logic + Interaction

Bootstrap → Responsive UI
```

---

## Commit Message

```bash
Add frontend cheatsheet
```