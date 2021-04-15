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

const onLoad = () => {
    ingredientListElements.forEach(ingredientListElement => {
        const ingredient = ingredientListElement.value
        if (localStorage.getItem(ingredient)) {
            ingredientListElement.checked = true
        }
    })
}

onLoad()
