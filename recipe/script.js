// checklist elements
let ingredientListElements = []

for (let i = 1; i<=10;i++) {
    ingredientListElements.push(document.getElementById(`ingredient${i}`))
}

ingredientListElements.forEach(ingredientListElement => {
    ingredientListElement.addEventListener("change", () => handleCheckListChange(ingredientListElement))
})

const handleCheckListChange = (element) => {
    if (element.checked) {
        // save element to storage
        localStorage.setItem(element.value, true)

    } else {
        // remove from storage
        localStorage.removeItem(element.value)
    }
    console.log(element)
    console.log(element.value)
    console.log(element.checked)
}

// video
const video = document.getElementById("video")

// steps
const stepsContainer = document.getElementsByClassName("list")[0]
let steps = []

let cnt = 0;
stepsContainer.querySelectorAll("div").forEach(step => {
    const stepNum = cnt++
    step.addEventListener("click", () => {
        console.log(stepNum)
        video.play()
    })
})

steps.forEach(step => {
    console.log(step)
})

// play video using got them all button
document.getElementById("gotThemAllButton").addEventListener("click", () => video.play())

// on load get the checklist items from storage and update the dom
const onLoad = () => {
    ingredientListElements.forEach(ingredientListElement => {
        const ingredient = ingredientListElement.value
        if (localStorage.getItem(ingredient)) {
            ingredientListElement.checked = true
        }
    })
}

onLoad()
