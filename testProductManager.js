const {ProductManager} = require("./ProductManager");

const PM = new ProductManager();
//console.log(PM.getProducts());
PM.addProduct({title:"Chaleco Puffer Ebruck Topo", description:"3 cuotas sin interes de $12.330ARS", price:36990, thumbnail:"https://vcp.com.ar/cdn/shop/files/Topo6_81943047-662b-4e1c-82ae-9e26fb212505.jpg?v=1688741569&width=700", code:"CHALECO", stock:10});
console.log(PM.getProducts());
PM.addProduct({title:"Chaleco con peluchito", description:"3 cuotas sin interes de $16.330ARS", price:48900, thumbnail:"https://vcp.com.ar/cdn/shop/files/Topo6_81943047-662b-4e1c-82ae-9e26fb212505.jpg?v=1688741569&width=700", code:"CHALECO 2", stock:9});
PM.addProduct({title:"Chaleco simil cuero", description:"3 cuotas sin interes de $17.330ARS", price:52300, thumbnail:"https://vcp.com.ar/cdn/shop/files/Topo6_81943047-662b-4e1c-82ae-9e26fb212505.jpg?v=1688741569&width=700", code:"CHALECO 3", stock:8});
PM.addProduct({title:"Bufanda", description:"3 cuotas sin interes de $4.330ARS", price:12990, thumbnail:"https://vcp.com.ar/cdn/shop/files/Topo6_81943047-662b-4e1c-82ae-9e26fb212505.jpg?v=1688741569&width=700", code:"Bufanda 1", stock:3});
PM.addProduct({title:"Blazer", description:"3 cuotas sin interes de $10.330ARS", price:30990, thumbnail:"https://vcp.com.ar/cdn/shop/files/Topo6_81943047-662b-4e1c-82ae-9e26fb212505.jpg?v=1688741569&width=700", code:"Blazer", stock:4});

//console.log(PM.getProductById(3));
//console.log(PM.getProductById(1));
PM.deleteProduct(1);
PM.updateProduct(2, {title:"Chaleco Puffer Ebruck Topo 4", description:"3 cuotas sin interes de $54.330ARS", price:58990, thumbnail:"https://vcp.com.ar/cdn/shop/files/Topo6_81943047-662b-4e1c-82ae-9e26fb212505.jpg?v=1688741569&width=700", code:"CHALECO 4", stock:18})
console.log(PM.getProducts());