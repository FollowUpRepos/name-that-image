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

const fileNames = names.map( name => {
  return `/img/${name}.jpg`
})

const image = document.createElement("IMG")
image.src = fileNames[0]

document.body.appendChild(image)