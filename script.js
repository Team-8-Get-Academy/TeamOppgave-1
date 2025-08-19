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


    inventoryhtml += `<button onclick="closeinventory()">Lukk Inventory</button>`

    inventoryelement.innerHTML = inventoryhtml
}

function closeinventory() {
    const inventoryelement = document.getElementById ("Inventory")
    inventoryelement.innerHTML = `<button onclick="showinventory()">Vis inventory</button>`
}