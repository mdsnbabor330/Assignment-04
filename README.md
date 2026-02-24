### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans:
1.getElementById :
        Select by id
        Returns single element
        Very fast
2.getElementsByClassName :
        Select by class
        Returns HTMLCollection 
        Can return multiple elements
3.querySelector :
        Select using CSS selector
        Returns first matching element
4.querySelectorAll :
        Select using CSS selector
        Returns NodeList (multiple elements)

### 2. How do you create and insert a new element into the DOM?
Ans:
let div = document.createElement("div"); //create element
div.innerText = "Hello"; //add content
document.body.appendChild(div); //insert into DOM

### 3. What is Event Bubbling? And how does it work?
Ans:
Event Bubbling is when an event starts on a child element and moves up to its parent elements
wrok:
Event goes from child → parent → document (bottom to top).

### 4. What is Event Delegation in JavaScript? Why is it useful?
Ans:
Instead of adding event listener to multiple child elements,we add event to their parent.
use for:
1.Better performance
2.Works for dynamically added elements
3.Cleaner code

### 5. What is the difference between preventDefault() and stopPropagation() methods?
Ans: 
preventDefault() : Stops default browser behavior.
stopPropagation() : Stops event bubbling.
