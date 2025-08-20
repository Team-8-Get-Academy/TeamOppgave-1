let hascat = false
function pickupCat () {
    hascat = true
   document.getElementById("cat").remove()
}
let hasPatrol = false
function pickupPatrol () {
    hasPatrol = true
   document.getElementById("Patrol").remove()
}
let hasSkull = false
function pickupSkull () {
    hasSkull = true
   document.getElementById("Skull").remove()
}
let hasRedBull = false
function pickupRedBull () {
    hasRedBull = true
   document.getElementById("RedBull").remove()
}
let hasMelk = false
function pickupMelk() {
    hasMelk = true
    
    document.querySelector("#Melk").remove()
    //document.querySelector("#Melk .p2:nth-child(2)")
    //document.getElementById("Melk").getElementsByClassName("p2")[0].remove()

    /*
        getElementById - returns element (or null)
        getElementsByClassName - returns [element]
    */
}

function showinventory (){
    const inventoryelement = document.getElementById ("Inventory")
    let inventoryhtml = "<h2>Velkommen til Inventory</h2>"

    if (hascat) {
        inventoryhtml += `<div>
            <img src="./assets/cat.jpg" />
            <div>Katt</div>
        </div>`
    }

    if (hasPatrol) {
        inventoryhtml += `<div>
            <img src="./assets/patrol.jpg" />
            <div>Nissan Patrol</div>
        </div>`
    }

    if (hasSkull) {
        inventoryhtml += `<div>
            <img src="./assets/skull.webp" />
            <div>Team 8 (skull)</div>
        </div>`
    } 

    if (hasRedBull) {
        inventoryhtml += `<div>
            <div>RedBull</div>
        </div>`
    }

    if (hasMelk) {
        inventoryhtml += `<div>
            <img src="./assets/image.png">
            <div>Melk</div>
        </div>`
    }


    inventoryhtml += `<button onclick="closeinventory()">Lukk Inventory</button>`

    inventoryelement.innerHTML = inventoryhtml
}

function closeinventory() {
    const inventoryelement = document.getElementById ("Inventory")
    inventoryelement.innerHTML = `<button onclick="showinventory()">Vis inventory</button>`
}

/*let items = {
    cat: {
        image: "./assets/cat.jpg",
        text: "Katt"
    },
    patrol: {
        image: "./assets/patrol.jpg",
        text: "Nissan Patrol"
    },
    skull: {
        image: "./assets/skull.webp",
        text: "Team 8 (skull)"
    },
    redbull: {
        text: "RedBull"
    },
    milk: {
        image: "./assets/image.png",
        text: "Melk"
    }
}

let inventory = [];

function renderItems() {
    const itemsElement = document.querySelector(".items")
    let itemsHTML = ""

    for (const [itemName, item] of Object.entries(items)) {
        itemsHTML += `<div class="item" onclick="pickUp('${itemName}', this)">
            ${ item.image ? `<img src="${item.image}">` : "" }
            <div>${item.text}</div>
        </div>`
    }

    itemsElement.innerHTML = itemsHTML
}

renderItems()

function pickUp(item, element) {
    element.remove()
    inventory.push(item)
}

function showinventory() {
    const inventoryElement = document.getElementById("Inventory")
    let inventoryHTML = ""

    for (const itemName of inventory) {
        const item = items[itemName]
        inventoryHTML += `<div>
            ${ item.image ? `<img src="${item.image}">` : "" }
            <div>${item.text}</div>
        </div>`
    }

    inventoryHTML += `<button onclick="closeinventory()">Lukk Inventory</button>`

    inventoryElement.innerHTML = inventoryHTML
}*/