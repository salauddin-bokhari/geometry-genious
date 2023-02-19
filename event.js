let serial = 1;
// Triangle 
document
  .getElementById("triangleButton")
  .addEventListener("click", function () {
    inputValidation("triangleBaseInput", "triangleHeightInput");
    const baseInput = inputValue("triangleBaseInput");
    const baseHeight = inputValue("triangleHeightInput");

    // set inner text for item box.using common function to reduce code
    setInnerText("triangleBase", baseInput);
    setInnerText("triangleHeight", baseHeight);

    const triangleCalculator = 0.5 * baseInput * baseHeight;
    if (isNaN(triangleCalculator) || baseInput === "" || baseHeight == "") {
      return; // return the string value of the input field
    }
    createNewElement(
      "calculationResult",
      "Triangle",
      triangleCalculator.toFixed(2),
      serial
    );
    serial++;
  });
  // Rectangle
document
.getElementById("rectangleButton")
.addEventListener("click", function () {
  inputValidation("rectangleWeightInput", "rectangleHeightInput");
  const rectangleWeight = inputValue("rectangleWeightInput");
  const rectangleLength = inputValue("rectangleHeightInput");

  
  setInnerText("rectangleWeight", rectangleWeight);
  setInnerText("rectangleLength", rectangleLength);

  // Calculate Answer

  const rectangleCalculator = rectangleWeight * rectangleLength;
  if (
    isNaN(rectangleCalculator) ||
    rectangleWeight === "" ||
    rectangleLength == ""
  ) {
    return; 
  }
  createNewElement(
    "calculationResult",
    "Rectangle",
    rectangleCalculator.toFixed(2),
    serial
  );
  serial++;
});
// Parallelogram 
document
  .getElementById("parallelogramBtn")
  .addEventListener("click", function () {
    inputValidation("parallelogramBaseInput", "parallelogramHeightInput");
    const parallelogramWeight = inputValue("parallelogramBaseInput");
    const parallelogramLength = inputValue("parallelogramHeightInput");

    
    setInnerText("parallelogramBase", parallelogramWeight);
    setInnerText("parallelogramHeight", parallelogramLength);

    // Calculate Answer
    const parallelogramCalculator = parallelogramWeight * parallelogramLength;
    if (
      isNaN(parallelogramCalculator) ||
      parallelogramWeight === "" ||
      parallelogramLength == ""
    ) {
      return; 
    }
    createNewElement(
      "calculationResult",
      "Parallelogram",
      parallelogramCalculator.toFixed(2),
      serial
    );
    serial++;
  });

// Rhombus
document.getElementById("rhombusButton").addEventListener("click", function () {
  inputValidation("rhombusInputD1", "rhombusInputD2");
  const rhombusWeight = inputValue("rhombusInputD1");
  const rhombusLength = inputValue("rhombusInputD2");

  
  setInnerText("rhombusBase", rhombusWeight);
  setInnerText("rhombusHeight", rhombusLength);

  // Calculate Answer
  const rhombusCalculator = 0.5 * rhombusWeight * rhombusLength;
  if (isNaN(rhombusCalculator) || rhombusWeight === "" || rhombusLength == "") {
    return; // return the string value of the input field
  }
  createNewElement(
    "calculationResult",
    "Rhombus",
    rhombusCalculator.toFixed(2),
    serial
  );
  serial++;
});
// Pentagon 
document
  .getElementById("pentagonButton")
  .addEventListener("click", function () {
    inputValidation("pentagonInputP", "pentagonInputB");
    const pentagonWeight = inputValue("pentagonInputP");
    const pentagonLength = inputValue("pentagonInputB");

    
    setInnerText("pentagonP", pentagonWeight);
    setInnerText("pentagonB", pentagonLength);

    // Calculate Answer
    const pentagonCalculator = 0.5 * pentagonWeight * pentagonLength;
    if (
      isNaN(pentagonCalculator) ||
      pentagonWeight === "" ||
      pentagonLength == ""
    ) {
      return; 
    }
    createNewElement(
      "calculationResult",
      "Pentagon",
      pentagonCalculator.toFixed(2),
      serial
    );
    serial++;
  });

// Ellipse 
document.getElementById("ellipseButton").addEventListener("click", function () {
  inputValidation("ellipseInputA", "ellipseInputB");
  const ellipseWeight = inputValue("ellipseInputA");
  const ellipseLength = inputValue("ellipseInputB");

 
  setInnerText("ellipseA", ellipseWeight);
  setInnerText("ellipseB", ellipseLength);

  // Calculate Answer
  const ellipseCalculator = 3.14 * ellipseWeight * ellipseLength;
  if (isNaN(ellipseCalculator) || ellipseWeight === "" || ellipseLength == "") {
    return; 
  }
  createNewElement(
    "calculationResult",
    "Ellipse",
    ellipseCalculator.toFixed(2),
    serial
  );
  serial++;
});

function inputValidation(id1, id2) {
  const inputField = parseFloat(document.getElementById(id1).value);
  const inputField2 = parseFloat(document.getElementById(id2).value);

  if (inputField <= 0 || inputField2 <= 0) {
    alert("Please enter a Positive number");
    return; // Add this line to stop the function execution
  } else if (isNaN(inputField) || isNaN(inputField2)) {
    alert("Please inter a valid number");
    return;
  } else if (inputField == "" || inputField2 == "") {
    alert("Please insert a number");
    return;
  }
}

// This function converts input value into integer

function inputValue(id) {
  const inputValue = document.getElementById(id);
  const inputInt = parseFloat(inputValue.value);

  if (isNaN(inputInt)) {
    return inputValue.value; // return the string value of the input field
  }

  inputValue.value = "";

  return inputInt;
}

// This function sets the inner text of an element

function setInnerText(id, value) {
  const element = document.getElementById(id);
  element.innerText = value;
}

// This function creates a new element

function createNewElement(id, name, answer, serial) {
  const parentId = document.getElementById(id);
  const result = document.createElement("div");
  result.classList.add(
    "flex",
    "p-5",
    "items-center",
    "justify-between",
    "space-x-3"
  );
  result.innerHTML = `
  <div class="flex space-x-2">
  <p>${serial}.</p>
  <p>${name}</p>
</div>
<p>${answer} cm<sup>2</sup></p>
<button
  type="button"
  href="./blog.html"
  class="bg-blue-500 px-5 py-2 rounded-md text-white font-medium"
  target="_blank"
>
  Convert to m<sup>2</sup>
</button>
  `;
  parentId.appendChild(result);
}

// This function adds a random background color on hover

function addRandomBackgroundColorOnHover(className, defaultColor) {
  var elements = document.getElementsByClassName(className);
  for (var i = 0; i < elements.length; i++) {
    var el = elements[i];
    el.addEventListener("mouseenter", function () {
      var color = "#" + Math.floor(Math.random() * 16777215).toString(16);
      this.style.transition = "background-color 0.3s ease-in-out";
      this.style.backgroundColor = color;
    });
  }
}

addRandomBackgroundColorOnHover("random-bg", "#fff");
