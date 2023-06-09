

// object array 
let allProduct = [];

// chuse Card
let selecterIndex = -1;


function addProuduct(){
    let firstName = document.getElementById("name-first").value;
    let howMuch = document.getElementById("how-much").value;
    let colorProduct = document.getElementById("color-product").value;

    // console.log(firstName);
    // console.log(howMuch);
    // console.log(colorProduct);

    document.getElementById("name-first").value = "";
    document.getElementById("how-much").value = "";
    document.getElementById("color-product").value = "";


    let newProduct = {
        name:firstName,
        much:howMuch,
        color:colorProduct
    }
    // editni davomi
    if(selecterIndex >= 0){
        allProduct[selecterIndex] = newProduct;
        selecterIndex= -1
    }
    else{
        allProduct.push(newProduct);
    }


    console.log(allProduct);
    drawCard();
}

function drawCard(){
    let result = "";

    for(let i=0; i<allProduct.length; i++ ){
        result+=`
        <div class="col-4">
        <div class="card mt-3">
            <div class="card-header">
                
            </div>
            <div class="card-body">
                <p>Name: ${allProduct[i].name}</p>
                <p>How much: <b>${allProduct[i].much}</b></p>
                <p>Color: <b>${allProduct[i].color}</b></p>
            </div>
            <div class="card-footer">
                <button class="btn btn-warning"onclick="editCard(${i})">Edit</button>
                <button class="btn btn-danger"onclick="deleteCard()">Delete</button>
            </div>
        </div>
    </div>
        `
    }
    document.getElementById("result").innerHTML = result;


}

// delete funksiya
function deleteCard(index){
    allProduct.splice(index,1);
    drawCard();
}

// all delete funksiya
function allDelete(index){
    allProduct.splice(index)
    drawCard();
}

// edit funksiya
function editCard(indeks){
    document.getElementById("name-first").value = allProduct[indeks].name;
    document.getElementById("how-much").value = allProduct[indeks].much;
    document.getElementById("color-product").value = allProduct[indeks].color;

    selecterIndex = indeks;
}