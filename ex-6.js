const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  // Start coding here
  return carCollection.includes(carBrand)
    ? `${carBrand} already exists in position ${
        carCollection.indexOf(carBrand) + 1
      } of the car collection.`
    : `New car collection is: Toyota, Fiat,Honda, BMW,${carBrand}.`;
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.
