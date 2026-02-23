### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? 
1.getElementById("id"),Selects one element,Uses id,Returns a single element (or null),IDs must be unique
2.getElementsByClassName("class"),Selects elements by class name,Returns HTMLCollection,It is live (auto updates if DOM changes).
3.quaryselector:Selects the first matching element,Uses CSS selectors
4.quaryselectorall:Selects all matching elements,Returns NodeList,Not live (static list)

### 2. How do you create and insert a new element into the DOM?
Use document.createElement(),
const newElement = document.createElement("div");
 Add Content / Attributes 
newElement.textContent = "Hello World";
newElement.className = "box";
including:
innerHTML
id
style
attributes
Example:newElement.id = "newBox";



###  3. What is Event Bubbling? And how does it work?
Event Bubbling is a JavaScript event behavior where:

 An event starts from the target element (where the event happened)
 Then moves upward through its parent > grandparent > document


 ### 4. What is Event Delegation in JavaScript? Why is it useful? 
Event Delegation is a technique where you:
 Add an event listener to a parent element
 Instead of adding event listeners to multiple child elements
It works because of Event Bubbling.



 ### 5. What is the difference between preventDefault() and stopPropagation() methods?
 stopPropagation:
Stops the event from moving to parent elements (Stops bubbling).
example code:document.getElementById("child").addEventListener("click", function(event) {
  event.stopPropagation();
});


preventDefault:

Stops the default browser behavior.

 Example Default Behaviors:

Link > Opens new page

Form > Submits

Checkbox > Checks
example code: document.querySelector("a").addEventListener("click", function(event) {
  event.preventDefault();
});