//Inventory Array to store products
const inventory = [];

//Function to add product to inventory
function addProduct(product){
    inventory.push(product);
    console.log(product.name +' added to inventory successfully');
}

//Functionk to remove product from inventory
function removeProduct(productName){
    const index = inventory.findIndex((product) => product.name === productName);

    if (index !== -1){
        inventory.splice(index,1);
        console.log(productName+' successfully removed from the inventory');
    } else {
        console.log(productName + ' is not found in the inventory')
    }
}

// Function to update quantity in Inventorty
function updateProductQuantity(productName, newQuantity){
    const product = inventory.find((product)=> product.name === productName );
    if (product){
        product.quantity = newQuantity;
        console.log(`Quantity of ${productName} updated to ${newQuantity}.`);
    }else{
        console.log('${productName} not found in inventory');
    };
}

// Function to calculate total value of inventory
function calTotalValue(){
    return inventory.reduce((total, product) => total + (product.price * product.quantity),0);
}

//Function to list all product in the inventory
function listProducts(){
    console.log('Inventory List:');
    inventory.forEach(product => {
        console.log(`Name: ${product.name}, Price: ${product.price}, Quantity: ${product.quantity}`);
    });

}

addProduct({name: "macbook", price:20000, quantity: 10});
addProduct({name:"iphone", price:10000, quantity: 5});
addProduct({name:"ipad", price: 15000, quantity:20});

listProducts(inventory);
updateProductQuantity('iphone',10);

removeProduct('macbook');
console.log("Total Inventory Value:", calTotalValue());