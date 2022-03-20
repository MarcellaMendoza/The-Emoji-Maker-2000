const myEmojis = ["🪴", "🧶", "🌮"] // array of emojis
const emojiBank = document.getElementById("emoji-element") // output
const emojiInput = document.getElementById("emoji-input") // input
const pushButton = document.getElementById("push-button") // beggining
const unshiftButton = document.getElementById("unshift-button") // end
const popButton = document.getElementById("pop-button")
const shiftButton = document.getElementById("shift-button")

function displayEmojis() {
  for (let i = 0; i < myEmojis.length; i++) {
       const emoji = document.createElement("span") 
      emoji.innerHTML = myEmojis[i]
      emojiBank.append(emoji)
  }
}

displayEmojis()

pushButton.addEventListener("click", function() {
    if (emojiInput.value) { 
      myEmojis.push(emojiInput.value) 
      emojiInput.value = ""
      emojiBank.innerHTML = ""
      displayEmojis()
    }
})
 
unshiftButton.addEventListener("click", function() {
    if(emojiInput.value) {
      myEmojis.unshift(emojiInput.value)
      emojiInput.value = ""
      emojiBank.innerHTML = ""
      displayEmojis()
    }
})

popButton.addEventListener("click", function() {
    // if(emojiInput.value) {
      myEmojis.pop()
      emojiInput.value = ""
      emojiBank.innerHTML = ""
      displayEmojis()
    // }
  
})

shiftButton.addEventListener("click", function() {
  // if(emojiInput.value) {
    myEmojis.shift()
    emojiInput.value = ""
    emojiBank.innerHTML = ""
    displayEmojis()
    
  // }
})



















// for (let i=0; i<myEmojis.length; i++) {
//   console.log(myEmojis[i])
// }

// //ALTERNATIVE WAY TO DO A FOR LOOP

// for (item of myEmojis) {
//   console.log(item)
// }

// //DISPLAY ON HTML
// const emojiElement = document.getElementById("emoji-element")

