//Question 1:
//answer: Meow!
const cat = {
  complain: () => {
    console.log("Meow!");
  },
};

cat.complain();

//Question 2:
//answer:<h3>
const myHeading = document.querySelector("h3");

myHeading.innerHTML = "Updated heading";

console.log(myHeading);

//Question 3:
//answer:<div class="results">
myHeading.style.fontSize = "3em";

//Question 4:
//answer:
myHeading.classList.add("subheading");

//Question 5:
//answer:
const paragraphs = document.querySelectorAll("p");
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}
paragraphs.forEach((para) => {
  para.style.colo = "red";
});

//Question 6:
//answer:
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML += "<p>New paragraph</p>";

console.log(resultsContainer);
resultsContainer.style.backgroundColor = "yellow";

//Question 7:
//answer: Blob Harold Blurt

const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

function namePrinter(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

namePrinter(cats);

//Question 8:
//answer:

function createCats(cats) {
  let mainDiv = document.createElement("div");
  for (let i = 0; i < createCats.length; i++) {
    let div = document.createElement("div");
    div.innerHTML = `<h5>${cats[i].name}</h5>
    <p>${cats[i].age}</p>
    `;
    mainDiv.appendChild(div);
  }
  return mainDiv;
}
