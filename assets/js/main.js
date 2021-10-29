let head = document.getElementById("head")
let li = document.getElementById("li")




function online() {
    head.classList.add("headLine")
    li.classList.add("bucketList")
}

function offline() {
    head.classList.remove("headLine")
    li.classList.remove("bucketList")
}