//URL source: https://www.delltechnologies.com/pt-br/what-we-do/it-transformation.htm
//Using javascript move the top area (highlighted with a red border) to between the “Crie uma base para inovação…” and “Crie exatamente…” sections.

let section1 = document.getElementById("tt-content").childNodes[3].childNodes[1].childNodes[1].childNodes[1].childNodes[1]

let section2 = document.getElementById("tt-content").childNodes[3].childNodes[1].childNodes[1].childNodes[1].childNodes[3]
section2.appendChild(section1)