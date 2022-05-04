const addButton = document.getElementById("add-button")
const textarea = document.getElementById("textarea")
const dateInput = document.getElementById("date")
const timeInput = document.getElementById("time")

let words = 150
const wordsContainer = document.getElementById("words")
wordsContainer.innerHTML = words

textarea.addEventListener("input", () => {
    words = 150
    words = words - textarea.value.length
    wordsContainer.innerHTML = words
    if (words > 10) {
        wordsContainer.style.color = "black"
    }
    if (words <= 10) {
        wordsContainer.style.color = "orange"
    } 
    if (words <= 5) {
        wordsContainer.style.color = "red"
    }
})

let dateContent 
dateInput.addEventListener("change", () => {
    dateContent = dateInput.value
    // funguje - máme date
})

let timeContent 
timeInput.addEventListener("change", () => {
    timeContent = timeInput.value
    // funguje - máme time
})

addButton.addEventListener("click", () => {
    addNewTask()
})

var tasksWrapper = document.getElementsByTagName("LI");
var close = document.getElementsByClassName("delete-task")
var i
var taskID = 1

function addNewTask() {
    var task = document.createElement("div")

    // task content
    var divContent = document.createElement("div")
    var inputText = textarea.value
    var text = document.createTextNode(inputText)
    var contentHeader = document.createElement("div")

    contentHeader.innerHTML = "Úkol č. " + taskID + " :"
    contentHeader.style.fontWeight = "bold"
    contentHeader.style.textDecoration = "underline"
    divContent.className = "task-content"
    divContent.appendChild(contentHeader)
    divContent.appendChild(text)

    
    // del button
    var delContent = document.createElement("div")
    var delButton = document.createElement("button")
    delButton.className = "delete-task"
    delButton.innerHTML = "Smazat"

    delContent.className = "task-buttons"
    delContent.appendChild(delButton)

    // deadline & time 
    var deadlineContent = document.createElement("div")
    var deadlineInput = dateContent
    var deadlineText = document.createTextNode(deadlineInput)
    var deadlineHeader = document.createElement("div")

    var deadlineTime = document.createTextNode(timeContent)
    var deadlineSpace = document.createElement("br")

    deadlineHeader.innerHTML = "Do :"
    deadlineHeader.style.fontWeight = "bold"
    deadlineHeader.style.textDecoration = "underline"
    deadlineContent.className = "task-timer"
    deadlineContent.appendChild(deadlineHeader)
    deadlineContent.appendChild(deadlineText)
    deadlineContent.appendChild(deadlineSpace)
    deadlineContent.appendChild(deadlineTime)

    task.className = "task"
    task.appendChild(deadlineContent)
    task.appendChild(divContent)
    task.appendChild(delContent)
    
    if (inputText === "") {
        alert("Nezadal jsi úkol.")
    } 
    else if (deadlineInput === undefined) {
        alert("Nezadal jsi datum.")
    } 
    else if (timeContent === undefined) {
        alert("Nezadal jsi čas.")
    }
    else {
        document.getElementById("tasks-wrapper").appendChild(task);
        textarea.value = "";
        words = 150
        wordsContainer.innerHTML = words
        taskID = taskID + 1
    }

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var taskToDel = this.parentElement;
            var taskToDelTwo = taskToDel.parentElement;
            taskToDelTwo.style.display = "none"
        }
    }
}

