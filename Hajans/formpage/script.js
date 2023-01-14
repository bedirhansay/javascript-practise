const addButton = document.getElementById("addValue");
const doneButton = document.getElementById("done");
const form = document.getElementById("form");
const varName = document.getElementById("var-name");

let variations = [1, 2];

function displayVarients() {
  for (let varient of variations) {
    let input = `
             <span>
                <input id=input${varient} placeholder="Variation Value"  type="text"> 
                 <i onclick=delItems(${varient}) class="fa-solid fa-circle-xmark"></i>
            </span>`;

    form.insertAdjacentHTML("beforeend", input);
  }
}

displayVarients();
addButton.addEventListener("click", () => {
  let count = form.children.length;
  const id = crypto.randomUUID();

  let input = `
             <span>
                <input id=input${id} placeholder="Variation Value"  type="text"> 
                 <i onclick=delItems('${id}') class="fa-solid fa-circle-xmark"></i>
            </span>`;
  variations.push(id);
  form.insertAdjacentHTML("beforeend", input);
});

done.addEventListener("click", () => {
  let empty = false;
  variations.forEach((item) => {
    const input = document.getElementById(`input${item}`);
    if (!input.value) {
      empty = true;
    }
  });
  if (empty) {
    alert("please fill all fields");
  } else {
    alert("submitted");
  }
});

function delItems(varient) {
  variations = variations.filter((item) => item !== varient);
  const el = document.getElementById("input" + varient);
  el.parentElement.remove();
}
