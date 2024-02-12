// Function to create a close button and append it to each list item
function addCloseButton() {
    const listItems = document.getElementsByTagName("LI");
    for (let i = 0; i < listItems.length; i++) {
        const span = document.createElement("SPAN");
        const txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        listItems[i].appendChild(span);
    }
}

// Function to add a checkbox icon to each list item
function addCheckBox() {
    const listItems = document.getElementsByTagName("LI");
    for (let i = 0; i < listItems.length; i++) {
        const checkbox = document.createElement("SPAN");
        checkbox.className = "checkbox";
        checkbox.innerHTML = "&#10003;";
        
        if (listItems[i].classList.contains('checked')) {
            if (!listItems[i].querySelector('.checkbox')) {
                const checkboxSpan = document.createElement("SPAN");
                checkboxSpan.className = "checkbox";
                listItems[i].insertBefore(checkboxSpan, listItems[i].childNodes[0]); // Insert before text node
            }
        } else {
            const checkbox = listItems[i].querySelector('.checkbox');
            if (checkbox) {
                listItems[i].removeChild(checkbox); // Remove checkbox if item is unchecked
            }
        }
    }
}


// Click on a close button to hide the current list item
document.addEventListener("click", function(event) {
    if (event.target.classList.contains('close')) {
        const listItem = event.target.parentElement;
        listItem.parentNode.removeChild(listItem); // Remove the clicked list item
    }
});

// Add a 'checked' symbol when clicking on a list item
document.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle('checked');
        addCheckBox();
    }
});

// Execute the function when 'Enter' is pressed in the input field
document.getElementById("myInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        newElement();
    }
});

function newElement() {
    const li = document.createElement("li");
    const inputValue = document.getElementById("myInput").value;
    const textInput = document.createTextNode(inputValue);
    li.appendChild(textInput);
    if (inputValue === '') {
        alert('Please write a description');
    } else {
        const closeButton = document.createElement("span");
        closeButton.classList.add("close");
        closeButton.appendChild(document.createTextNode("\u00D7"));
        li.appendChild(closeButton);

        document.getElementById("myList").appendChild(li);
    }
    document.getElementById("myInput").value = "";
}

// Get references to the buttons
const allButton = document.getElementById("allButton");
const activeButton = document.getElementById("activeButton");
const completedButton = document.getElementById("completedButton");
const clearButton = document.getElementById("clearButton");

// Function to handle showing all list items
allButton.addEventListener("click", function() {
    const listItems = document.getElementsByTagName("LI");
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].style.display = "block";
    }
});

// Function to handle showing only active list items
activeButton.addEventListener("click", function() {
    const listItems = document.getElementsByTagName("LI");
    for (let i = 0; i < listItems.length; i++) {
        if (listItems[i].classList.contains('checked')) {
            listItems[i].style.display = "none";
        } else {
            listItems[i].style.display = "block";
        }
    }
});

// Function to handle showing only completed list items
completedButton.addEventListener("click", function() {
    const listItems = document.getElementsByTagName("LI");
    for (let i = 0; i < listItems.length; i++) {
        if (listItems[i].classList.contains('checked')) {
            listItems[i].style.display = "block";
        } else {
            listItems[i].style.display = "none";
        }
    }
});

// Function to handle clearing completed list items
clearButton.addEventListener("click", function() {
    const listItems = document.getElementsByTagName("LI");
    for (let i = 0; i < listItems.length; i++) {
        if (listItems[i].classList.contains('checked')) {
            listItems[i].parentNode.removeChild(listItems[i]);
        }
    }
});

