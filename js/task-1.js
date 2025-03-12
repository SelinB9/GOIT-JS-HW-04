function isEnoughCapacity(products, containerSize) {
  let totalProduct = 0;
  for (product in products) {
    totalProduct += products[product]; //bu satırda totalProduct değişkenine, products nesnesindeki (veya dizisindeki) belirli bir öğenin değeri ekleniyor. Bu işlem genellikle, bir dizi veya nesne öğelerinin toplamını hesaplamak gibi durumlarda kullanılır.
  } if (totalProduct <= containerSize) {
      return true
    }
    else {
      return false
    }
  }

  
console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)
); // true

console.log(
  isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)
); // false
