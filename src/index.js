// import animals from "./data";
// console.log("hello  kamlio");

// const lunch = [
//   { fruit: "apple", another: "mango" },
//   { bread: "raisin", liquid: "milk" },
//   { food: ["water", "snack", "coca"] }
// ];
// const [f1, f2, f3] = lunch;
// const {fruit , another }= f1
// console.log(f1 , fruit);

// const [one, two, three] = lunch;
// const { fruit } = one;
// console.log(three);
// const { food } = three;

// const [a, b, c] = food;
// console.log(a);

// // now , lets create a function

// function foodAll(lunch) {
//   return [lunch[0].fruit, lunch[1].bread, lunch[2].food];
// }
// console.log(foodAll(lunch));

// const animals = [
//   { name: "cat", sound: "meow" },
//   { name: "dog", sound: "woof" }
// ];

// const [reej, adam] = animals;

// const { name, sound } = reej;

// console.log(name, sound);

// function anim(animal) {
//   return [animal.name, animal.fun];
// }

// CHALLENGE: uncomment the code below and see the car stats rendered
//

// console.log(tesla.model);
// const {coloursByPopularity:hondatopcolour,speedStats } = honda ;
// const {coloursByPopularity :teslatopcolour,speedStats } = tesla ;
// const {
//   model,
//   coloursByPopularity,
//   speedStats: { topSpeed, zeroToSixty }
// } = honda;

// const {
//   model,
//   coloursByPopularity,
//   speedStats: { topSpeed, zeroToSixty }
// } = tesla;

import React from "react";
import cars from "./practice";
import ReactDOM from "react-dom";
const [honda, tesla] = cars;
// HONDA
const { coloursByPopularity, speedStats } = honda;
const [hondaTopColour, lowCol] = coloursByPopularity;

const { topSpeed: hondaTopSpeed, zeroToSixty } = speedStats;

// TESLA
const { coloursByPopularity: tes, speedStats: tesSpee } = tesla;
const [teslaTopColour] = tes;

const { topSpeed: teslaTopSpeed } = tesSpee;

console.log(teslaTopColour);

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
