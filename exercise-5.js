// Using javascript or jQuery dynamically store the first word of each category h5 (highlighted below)… 
// …and add it to the respective sub-links like the image below (this is a sample, it should be applied for all product categories respectively, e.g.: Laptops, Desktop Computers, …):

// stored all categories in a list
var a = $('*[data-testid="mainCategory"]');
var categories = []
for(var i =0; i < a.length; i++){
    categories.push( a[i].innerText)}
// stored all subcategories in another list
var c = $('*[data-testid="subCategory"]');
var subcategories = []
for(var i =0; i < c.length; i++){
    subcategories.push( c[i].innerText)}

//I know the ideia was not to do it hard coded, but I couldn't think another alternative. I would like to learn how it was supposed to be


for(var i =0; i < c.length; i++){
    if(i<=3)c[i].innerText = categories[0]+" - " +subcategories[i]
    if (i>3 && i<=7)c[i].innerText = categories[1]+" - " +subcategories[i]
    if (i>7 && i<=10)c[i].innerText = categories[2]+" - " +subcategories[i]
    if (i>10 && i<=13)c[i].innerText = categories[3]+" - " +subcategories[i]
    if (i>13 && i<=15)c[i].innerText = categories[4]+" - " +subcategories[i]
    if (i>15 && i<=17)c[i].innerText = categories[5]+" - " +subcategories[i]
    if (i>17)c[i].innerText = categories[6]+" - " +subcategories[i]

}