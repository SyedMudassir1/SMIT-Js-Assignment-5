
// *************** Js Assignment # 5 *************** //

// ===================== chp # 13-15  =====================

//Question no # 1

// var students = ["Ahmad","Hassan","Hussain"];
// console.log(students);

//Question no # 2

// var students = new Array("Abbas", "Akbar", "Asghar");
// console.log(students);

//Question no # 3

// var city = ["kpk", "lahore", "islamabad"];
// console.log(city);

//Question no # 4

// var number = [1, 2, 3, 4, 5, 6,];
// console.log(number);

//Queston no # 5

// var boolean = ["Ahmad, Ali, Jaffar"];
// console.log(boolean);

//Question no # 6 

// var mixed = ["Ahmad", "Ali", 151214, true];
// console.log(mixed);

//Question no # 7

// var qualifications = ["SSC, HSC, BCS, BS, BCOM, MS, M.PHIL, PHD"];
// console.log(qualifications);
// document.write(" Qualifications: <br> SSC <br> HSC <br> BCS <br> BS <br> BCOM <br> MS <br> M.PHIL <br> PHD");

//Question no # 8

//  var arr = ["Abbas", "Hassan", "Hussain"];
//  console.log(arr);
//  var arr2 = ["320", "230", "480"];
// console.log(arr2);

// var arrayTotal = 500;
// console.log(arrayTotal);


// var arrayTotal = 500;
// console.log(arrayTotal);
// var student1 = 320;
// console.log(320) 
// arrayTotal = 320 / 500 * 100;
// console.log(arrayTotal);

// var arrayTotal = 500;
// console.log(arrayTotal);
// var student2 = 230;
// console.log(230) 
// arrayTotal = 230 / 500 * 100;
// console.log(arrayTotal);

// var arrayTotal = 500;
// console.log(arrayTotal);
// var student3 = 480;
// console.log(230) 
// arrayTotal = 480 / 500 * 100;
// console.log(arrayTotal);

// document.write("Score of Abbas is 320. percentage: 64% <br> Score of Hassan is 230. percentage: 46% <br> Score of Hussain is 480. percentage: 94% <br>");


//Question no # 9

//  var color = ["red", "blue", "green", "pink", "yellow", "black"];
//  console.log(color);
//  document.write("red <br> blue <br> green <br> pink <br> yellow <br> black");
  
//  // -------- (a) ----------
//  //   var userAddFistColor = brown;
//  color.unshift("brown");
//  console.log(color);

//  document.write("<br> <br> brown  <br> red   <br> blue  <br> green  <br> pink  <br> yellow  <br> black");

//  // --------- (b) -----------
//   // var userAddEndColor = white;
// color.push("white");
// console.log(color);

// document.write(" <br> <br> brown <br> red <br> blue <br> green <br> pink <br> yellow <br> black <br> white");

// // ----------- (c) ---------
// // var userAddcolors = 2;
// color.unshift("gray", "orange");
// console.log(color);

// document.write(" <br> <br> gray <br> orange <br> brown <br> red <br> blue <br> green <br> pink <br> yellow <br> black <br> white");

// // ------------- (e) ----------------
// // var userDeleteColor = "white";
// color.splice(9,1);
// console.log(color);
// color.splice(8,1)
// console.log(color);

// document.write(" <br> <br> gray <br> orange <br> brown <br> red <br> blue <br> green <br> pink <br> yellow");

// // ------------- (f) -----------------------
// // var userColorIndex = 2;

// color.splice(2,0, 'light blue' );
// console.log(color);

// document.write(" <br> <br> gray <br> orange <br> light blue <br> red <br> blue <br> green <br> pink <br> yellow");

// // ------------------------ (g) --------------------
// // var userDeleteColors = 2;

// color.splice(2,1);
// console.log(color);

// document.write(" <br> <br> gray <br> orange <br> brown <br> red <br> blue <br> green <br> pink <br> yellow");

//Question no # 10

// var scoresOfStudents = [320, 230, 480, 120];
// console.log(scoresOfStudents);
// scoresOfStudents [0] = [scoresOfStudents[3], scoresOfStudents[3] = scoresOfStudents[0]][0];
// console.log(scoresOfStudents);

//Question no # 11

// var cities = ["Karachi", "Lahore", "Islamabab", "Quetta", "Peshawar"];
// console.log(cities);
// var copy = cities.slice(2,4);
// console.log(copy);
//  document.write(" cities list; <br> Karachi,  Lahore,  Islamabab, Quetta, Peshawar <br>");
//  document.write("select cities list: <br>");
//  document.write(copy);

//Question no # 12

// var arr = ["This","is","my","cat"];
// console.log(arr);
// var arrJoin = ["This is my cat"];
// console.log(arrJoin);

//Question no # 13
// var array = ["keyboard","mouse","printer","monitor"];
// console.log(array);

//  array.unshift("keyboard",)
// console.log(array);
//  array.pop("keyboard",)
// console.log(array);

//  array.unshift("mouse",)
// console.log(array);
//  array.pop("mouse",)
// console.log(array);

//  array.unshift("printer",)
// console.log(array);
//  array.pop("printer",)
// console.log(array);

// array.unshift("monitor",)
// console.log(array);
//  array.pop("monitor",)
// console.log(array);

//Question no # 14 

// var array = ["keyboard","mouse","printer","monitor"];
// console.log(array);

//  array.push("monitor",)
// console.log(array);
//  array.shift("monitor",)
// console.log(array);

//  array.push("printer",)
// console.log(array);
//  array.shift("printer",)
// console.log(array);

//  array.push("mouse",)
// console.log(array);
//  array.shift("mouse",)
// console.log(array);

//  array.push("keyboard",)
// console.log(array);
//  array.shift("keyboard",)
// console.log(array);

//Question no # 15

//  var phonesManue = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
//  console.log(phonesManue);

//  document.write(" Phone manufactures : <br> Apple <br> Samsung <br> Motorola <br >Nokia <br> Sony <br> Haier");



// ******************** chp # 17-20 ********************* //

//Question no # 1

// var ary = [
// [""],
// [""],
// ];
// for(var a = 0; a < 2; a++){
//     {
//         document.write(ary[a] + " ") 
//     }
//     document.write("<br>");
// }

//Question no # 2 

// var num = [
//  ["0 1 2 3"],
//  ["1 0 1 3"],
//  ["2 1 0 1"],
//  ];
//  for(var a = 0; a < 3; a++){
//      {
//          document.write(num[a] + " ") 
//      }
//      document.write("<br>");
//  }

//Question no # 3

//  var x ;
//  for (x = 1; x <= 10; x++){
//  console.log(x)}


//Question no # 5

// var fruits = ["apple", "banana", "mango", "orang", "strawberry"];
// for( var fruits  = "apple"){
//     console.log(fruits)
// }
//var = "fruits"
//  name [0]
//  name [1]
//  console.log(fruits);



//Question no # 6

// --------- (a) -----------

// var y ;
//   for (y = 1; y <= 15; y++){
//   console.log(y);
//   document.write(y);
//   };

// ============ (b) =================

// var j ;
//   for (j = 10; j <= 1; j=j--){
//   console.log(j);
//   document.write(j);
//   };

// -------------------- (c) ----------------------

//  var c ;
//     for (c = 0; c <= 20; c=c+2){
//     console.log(c);
//     document.write(c);    };

// =========================== (d) ===========================

// var x ;
//   for (x = 1; x <= 19; x=x+2){
//   console.log(x)
//   };

// ------------------------------------ (e) -------------------------------

// var e ;
//   for (e = 2k; e <= 20k; e=e+2k){
//   console.log(e)
//   };


//Question no # 10

// var x ;
//  for (x = 5; x <= 100; x=x+5){
//  console.log(x)
//  };

/// ***********=========== THE END =============++++++++++++++++++//