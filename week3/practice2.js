// #1
function sum (a, b) {
    return a + b
}
var results = sum(2, 7);
console.log(results);

// #2
function largeNum (num4, num6, num11) {
    return Math.max (num4,num6, num11);
}
console.log(largeNum(4,6,11));

// #3
function oddEven(v) {
    return v % 2 ? "odd" : "even";
}
console.log(oddEven(7))

// #4
function read (strg) {
    if (strg.length <= 20) {
      return strg + strg;
    } else if (strg.length > 20) {
      return strg.slice(0, strg.length / 2);
    }
  }
    console.log(read("Universe"));
    console.log(read("No one knows if the universe is infinitely large, or even if ours is the only universe that exists"));

