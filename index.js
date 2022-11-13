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

  // Remember the names for later
  nameArray.push(name)
}

shuffle(nameArray)
console.log("nameArray:", nameArray);

nameArray.forEach( name => {
  const div = document.createElement("DIV")

  div.textContent = name
  // div.addEventListener("mousedown", startingToDrag)

  // The `dragstart` event requires a `draggable` property
  // to be set on the element, otherwise it will not be
  // triggered
  div.draggable="true"
  div.addEventListener("dragstart", startingToDrag)

  nameDiv.appendChild(div)
})


function startingToDrag(event) {
  event.preventDefault()
  console.log("event:", event);
}



function shuffle (a) {
  let ii = a.length

  while (ii) {
    const jj = Math.floor(Math.random() * ii)
    ii -= 1;
    [a[ii], a[jj]] = [a[jj], a[ii]]
  }

  return a // for chaining
}
