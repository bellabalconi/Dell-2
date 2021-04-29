# DellTest

### 1.Assess your knowledge level on the following languages (1 = none; 5 = expert):

Vanilla JS - 3
jQuery - 2
HTML/HTML5 - 4
CSS/CSS3 - 3
Ajax - 4
AngularJS - 2
Bootstrap -  5

### 2.What is the width of a container with 100px of width and 5px of padding?

Without the CSS box-sizing property the padding will be added to the visible width of the container, making it 110px.
But the box-sizing property allows us to include the padding and border in an element's total width and height, totalizing the same initial 100px.

### 3.How to apply a click event to all paragraphs except for the last?

$('#elementName p:not(:last)').on('click', someFunction);

### 4.Why does the alert show "Jack" first and then undefined?

It’s returning undefined because is a default Javascript behavior to close a statement automatically at the end of a line. That means you cannot break the line between “return” and “name”.