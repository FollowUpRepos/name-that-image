const names = [
  "bones",
  "fingernails",
  "fingerprint",
  "muscle",
  "palm",
  "skeleton",
  "skull",
  "toenails"
]

// Get three random images
function getRandomName() {
  const index = Math.floor(Math.random() * names.length)
  return names.splice(index, 1)[0] // [ "name" ]
}

const imageDiv = document.createElement("DIV")
const nameDiv  = document.createElement("DIV")
imageDiv.id = 'img'
nameDiv.id = "names"
document.body.appendChild(imageDiv)
document.body.appendChild(nameDiv)


let nameArray = []
for ( let ii = 0; ii < 3; ii += 1 ) {
  const image = document.createElement("IMG")
  const name = getRandomName()
  const src = `/img/${name}.jpg`
  image.src = src
  imageDiv.appendChild(image)
  nameArray.push(name)
  const srcName = src.slice(5, -4)
  image.alt = srcName
}

shuffle(nameArray)


nameArray.forEach( name => {
  const div = document.createElement("DIV")
  div.draggable = "true";
  nameDiv.appendChild(div)
  const dataSpan = document.createElement('span')
  dataSpan.innerHTML = name
  div.appendChild(dataSpan)
})

// let nodes = nameDiv.childNodes
// for (let i = 0; i < nodes.length; i++) {
//   nodes[i].classList = 'imgNames'
// }


  const dragSource = document.getElementById("names");
  dragSource.addEventListener("dragstart", (e) => {
    e.target.classList.add("dragging");
    dragged = e.target;
  });

  dragSource.addEventListener("dragend", (e) => {
    e.target.classList.remove("dragging");
  });

  const dragTarget = document.getElementById("img");
  dragTarget.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  dragTarget.addEventListener("drop", (e) => {
    e.preventDefault();
    if (dragged.textContent !== e.target.alt) {
      dragged.classList.add('noMatch')
    }else{
      dragged.classList.add("match");
    }
  });


function shuffle (a) {
  let ii = a.length

  while (ii) {
    const jj = Math.floor(Math.random() * ii)
    ii -= 1;
    [a[ii], a[jj]] = [a[jj], a[ii]]
  }

  return a // for chaining
}
