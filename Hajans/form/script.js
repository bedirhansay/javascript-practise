let variations = [
  { id: "1", size: "M" },
  { id: "2", size: "L" },
  { id: "3", size: "S" },
];

let editId;
let isEdit = false;
const varient = document.getElementById("varient-input");
const button = document.getElementById("AddVar");

displayVarients();
function displayVarients() {
  let ul = document.getElementById("varient");
  ul.innerHTML = "";

  for (let varient of variations) {
    let li = `<li>
        <label for=${varient.id}>${varient.size}</label>
        <span>    
        <i onclick=delItems(${varient.id}) class="fa-sharp fa-solid fa-trash"></i>
        <i onclick='editItems(${varient.id},"${varient.size}")' class="fa-solid fa-pen-to-square"></i>
        </span>
    </li>`;
    ul.insertAdjacentHTML("beforeend", li);
  }
}

// ADD ITEMS

const addVar = document.getElementById("AddVar");
addVar.addEventListener("click", function (e) {
  if (varient.value == "") {
    varient.value == " ";
    alert("This Area can not be empty");
  } else {
    if (!isEdit) {
      variations.push({ id: variations.length + 1, size: varient.value });
    } else {
      for (let varients of variations) {
        if (varients.id == editId) {
          varients.size = varient.value;
        }
      }
      varient.value = "";
      button.innerText = "Add";
      varient.classList.remove("active");
    }
    varient.value = "";
    displayVarients();
  }

  e.preventDefault();
});

/// DELETE ITEMS

function delItems(id) {
  variations = variations.filter((e) => Number(e.id) !== id);
  displayVarients();
}

// UPDATE ITEMS

function editItems(id, itemName) {
  editId = id;
  isEdit = true;
  button.innerText = "Update";
  varient.classList.add("active");
  varient.value = itemName;
  varient.focus();
}
