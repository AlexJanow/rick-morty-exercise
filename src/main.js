const fetchButton = document.getElementById("button-fetch");
const body = document.querySelector("body");
const personList = document.querySelector(".personList");

const select = document.querySelector("select");

fetchButton.addEventListener("click", () => {
  deleteResults();

  fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      if (select.value === "alive") {
        data.results.forEach((e) => {
          if (e.status === "Alive") {
            createPerson(e);
          }
        });
      } else if (select.value === "dead") {
        data.results.forEach((e) => {
          if (e.status === "Dead") {
            createPerson(e);
          }
        });
      } else if (select.value === "unknown") {
        data.results.forEach((e) => {
          if (e.status === "unknown") {
            createPerson(e);
          }
        });
      }
    });
});

//big function
function createPerson(person) {
  const personList = document.querySelector(".personList");
  const section = createSection();
  const personName = createPersonName(person);
  const personImg = creaetePersonImg(person);

  personList.append(section);
  section.append(personName);
  section.append(personImg);
  return section;
}

//functions
function deleteResults() {
  personList.innerHTML = "";
}

function createSection() {
  const section = document.createElement("section");
  section.classList.add("person");
  return section;
}

function createPersonName(person) {
  const personName = document.createElement("p");
  personName.textContent = person.name;
  if (person.status === "Alive") {
    personName.classList.add("alive");
  } else if (person.status === "Dead") {
    personName.classList.add("dead");
  } else if (person.status === "unknown") {
    personName.classList.add("unknown");
  }
  return personName;
}

function creaetePersonImg(person) {
  const personImg = document.createElement("img");
  personImg.src = person.image;
  return personImg;
}
