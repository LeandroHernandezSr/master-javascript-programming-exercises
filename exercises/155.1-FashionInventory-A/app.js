let currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 }
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 }
    ]
  }
];

function renderInventory(inventory) {
  let result = [];

  for (let designer of inventory) {
    let designerName = designer.name;
    let shoes = designer.shoes;

    for (let shoe of shoes) {
      let shoeName = shoe.name;
      let price = shoe.price;

      let shoeInfo = [designerName, shoeName, price];

      result.push(shoeInfo);
    }
  }

  return result;
}

console.log(renderInventory(currentInventory))
