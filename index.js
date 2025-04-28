let saveEl      = document.getElementById("save-el")
let countEl     = document.getElementById("count-el")
let countReset  = document.getElementById("reset-btn") 
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function decrement() {
    if(count){
        count -= 1
        countEl.textContent = count
    }
}

function save() {
    if(count){
        let countStr = count + " - "
        saveEl.textContent += countStr
    }
    countEl.textContent = 0
    count = 0
}

function reset() {
    saveEl.textContent  = "Previous entries: "
    countEl.textContent = 0
    count = 0
}
