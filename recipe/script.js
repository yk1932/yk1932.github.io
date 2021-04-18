// checklist elements
let ingredientListElements = [];

for (let i = 1; i <= 10; i++) {
  ingredientListElements.push(document.getElementById(`ingredient${i}`));
}

ingredientListElements.forEach((ingredientListElement) => {
  ingredientListElement.addEventListener("change", () =>
    handleCheckListChange(ingredientListElement)
  );
});

const handleCheckListChange = (element) => {
  if (element.checked) {
    // save element to storage
    localStorage.setItem(element.value, true);
  } else {
    // remove from storage
    localStorage.removeItem(element.value);
  }
  console.log(element);
  console.log(element.value);
  console.log(element.checked);
};

// video
const video = document.getElementById("video");

const getSeconds = (time) => {
  const [min, sec] = time.split(".");

  return Number(min) * 60 + Number(sec);
};

// steps.
const steps = document
  .getElementsByClassName("list")[0]
  .querySelectorAll("div");
// let steps = []

let cnt = 0;
// stepsContainer.querySelectorAll("div").forEach(step => {
//     const stepNum = cnt++
//     step.addEventListener("click", () => {
//         console.log(stepNum)
//         video.play()
//     })
// })

steps[0].addEventListener("click", () => jumpToTime("0.30"));
steps[1].addEventListener("click", () => jumpToTime("0.50"));
steps[2].addEventListener("click", () => jumpToTime("1.15"));
steps[4].addEventListener("click", () => jumpToTime("1.45"));
steps[5].addEventListener("click", () => jumpToTime("1.53"));
steps[6].addEventListener("click", () => jumpToTime("2.11"));
steps[9].addEventListener("click", () => jumpToTime("2.19"));
steps[13].addEventListener("click", () => jumpToTime("2.48"));

const jumpToTime = (time) => {
  console.log(time);
  video.currentTime = getSeconds(time);
  // console.log(getSeconds(time))
};

// play video using got them all button
document
  .getElementById("gotThemAllButton")
  .addEventListener("click", () => video.play());

// on load get the checklist items from storage and update the dom
const onLoad = () => {
  ingredientListElements.forEach((ingredientListElement) => {
    const ingredient = ingredientListElement.value;
    if (localStorage.getItem(ingredient)) {
      ingredientListElement.checked = true;
    }
  });
};

onLoad();
