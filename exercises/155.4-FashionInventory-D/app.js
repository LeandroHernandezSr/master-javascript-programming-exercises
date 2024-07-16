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

function getLaceNameDataForShoes(inventory) {
  let result = [];

  for (let designer of inventory) {
    let designerName = designer.name;
    let shoes = designer.shoes;

    for (let shoe of shoes) {
      let nameWords = shoe.name.split(' ');
      let targetWordIndex = -1;

      for (let i = 0; i < nameWords.length; i++) {
        if (nameWords[i].includes('lace') || nameWords[i].includes('laced')) {
          targetWordIndex = i;
          break;
        }
      }

      if (targetWordIndex !== -1) {
        result.push({
          nameWords: nameWords,
          targetWordIndex: targetWordIndex
        });
      }
    }
  }

  return result;
}

console.log(getLaceNameDataForShoes(currentInventory));
