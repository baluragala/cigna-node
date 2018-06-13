// var buffer = new Buffer([1, 2, 3, 4, 5, 6]);
// console.log(buffer);

var buffer = new Buffer(16);
buffer.write("Hello", "utf-8");
buffer.write(" world", 5, "utf-8");
console.log(buffer.toJSON());
