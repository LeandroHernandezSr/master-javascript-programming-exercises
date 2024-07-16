let currentInventory = [
    {
      name: 'Brunello Cucinelli',
      shoes: [
        {name: 'tasselled black low-top lace-up', price: 1000},
        {name: 'tasselled green low-top lace-up', price: 1100},
        {name: 'plain beige suede moccasin', price: 950},
        {name: 'plain olive suede moccasin', price: 1050}
      ]
    },
    {
      name: 'Gucci',
      shoes: [
        {name: 'red leather laced sneakers', price: 800},
        {name: 'black leather laced sneakers', price: 900}
      ]
    }
  ];

  function renderInventory(shoeList) {
    let result = [];
  
    for (let designer of shoeList) {
      let designerName = designer.name;
      let shoes = designer.shoes;
  
      for (let shoe of shoes) {
        if (shoe.name.includes('black')) {
          result.push([designerName, shoe.name, shoe.price]);
        }
      }
    }
  
    return result;
  }

console.log(renderInventory(currentInventory));
