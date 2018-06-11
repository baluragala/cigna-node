var hotelServices = require("./lib");

var takeOrder = hotelServices.takeOrder;

let itemsForTable1 = ["french fires", "fried rice", "vanjaram fish"];
let itemsForTable2 = ["tea", "coke"];
let itemsForTable3 = [
  "french fires",
  "fried rice",
  "vanjaram fish",
  "falooda",
  "tandoori",
  "pasta",
  "noodles"
];

hotelServices.takeOrder(itemsForTable1, "table1");
hotelServices.takeOrder(itemsForTable2, "table2");
hotelServices.takeOrder(itemsForTable3, "table3");
