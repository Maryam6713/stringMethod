//  var fruitName = "water"
//  fruitName = fruitName + "melon"
//  fruitName += "melon"
//  console.log(fruitName);


// var word = prompt("Enter word")
// var opposite = ""

// for(var i = word.length-1; i >= 0  ; i--){
//     opposite += word[i]
// }

// if(word === opposite){
//     alert("Its a palindrome ")
// }else{
//     alert("Its not a palindrome ")
// }


// var sentense = "hi how are you"
// console.log(sentense.indexOf("o"));
// console.log(sentense.lastIndexOf('o'))


//  var arr = ["apple","bnana","orange"]
//  console.log(arr.indexOf("apple"));

 var arr = [1, 3, 6, 34, 65, 2, 76, 54, 87, 99, 69, 200];
var max = arr[0];
var current = arr[0];

for (var i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

for (var j = 1; j < arr.length; j++) {
  if (arr[j] > current) {
    current = arr[j];
  }
}

if (max < current) {
  console.log(current);
} else {
  console.log("nothing");
}
