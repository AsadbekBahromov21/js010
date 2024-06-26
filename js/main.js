// {
//     // 1 masala
//     function foo(array){
//         let sum = []
//         for(let i = 0, len = array.length; i < len; i++){
//          if(array[i] > 0){
//             sum.push(array[i])
//          }
//         }
//         return sum
//     }
//     console.log(foo([-5, 3, 5, -2]));
// }
// {
//     //  1 masal 2 korinish
//     let foo = [-5, 3, 5, -2]
//     let sum = []
//     foo.forEach((son) =>{
//         if(son > 0){
//             sum.push(son)
//         }
//     })
//     console.log(sum);
// }
// {
//     //  1masla 3 korinish
//     let foo = [-5, 3, 5, -2]
//     let sum = foo.filter((son) => son > 0)
//     console.log(sum);
// }
// {
//     //  2masala
//     const foo = (hello) => {
//         return hello.split("").reverse().join("")
//     }
//     console.log(foo("salom"));
// }
// {
//     //  3masla 
//      const foo = (hello) => {
//         return hello.split("").reverse().join("")
//      }
//      console.log(foo(123+""));
// }
// {
//     // 4masala
//     let boolen = [true, false, true, false]
//     let sum = boolen.filter((qiymat) => qiymat === false)
//     console.log(sum);
// }
// {
//     //  4 masla 2 korinish
//     function boolen(array){
//         let sum = []
//         for(let i = 0, len = array.length; len > i; i++){
//          if(array[i] === false){
//             sum.push(array[i])
//          }
//         }
//         return sum
//     }
//     console.log(boolen([true, false, true, false]));
// }
// {
//     //  5 masalani arrayda chiqishi
//     let foo = [1, 2, 3, 4, 5]
//     let sum = foo.filter((qiymat) => qiymat % 2 === 0)
//     console.log(sum);
// }
// {
//     // 5 masala ishlanishi
//     function foo(array){
//      let sum = 0
//      for(let i = 0, len = array.length; i < len; i++){
//         if(array[i] % 2 === 0){
//             sum += array[i]
//         }
//      }
//      return sum
//     }
//     console.log(foo([1, 2, 3, 4, 5]));
// }
// {
//     // 6 masala
//     function foo(array){
//         let sum = []
//      for(let i = 0, len = array.length; i < len; i++){
//       sum.push(array[i] ** 2)
//      }
//      return sum
//     }
//     console.log(foo([5, 2, 3]));
// }
// {
//     // 7 massala
//     function foo(n){
//         let sum = []
//         for(let i = 1; i <= n; i++){
//            sum.push(i)
//         }
//         return sum
//     }
//     console.log(foo(5));

// }
// {
//     //  8 masala
//     function foo(a, b){
//         let sum = []
//         for(let i = a; i < b; i++){
//             if(i % 2 === 0){
//                 sum.push(i)
//             }
//         }
//         return sum
//     }
//     console.log(foo(2, 9));
// }

// {
//     // 9 masala
//     function toCapitalize(text) {
//         text = text.split(".");
//         text2 = [];
//         text.forEach((txt) => {
//             txt = txt.trimStart();
//             txt2 = txt[0].toUpperCase();
//             txt = `${txt2}${txt
//                 .split("")
//                 .slice(1, txt.length - 0)
//                 .join("")}`;
//             text2.push(txt);
//         });
    
//         return text2.join(". ");
//     }
//     console.log(toCapitalize("asadbek"));
    

// }
// {
//     // 10 masala
//     function foo(str, a){
//         console.log(str.repeat(a));
//     }
//     console.log(foo(" salom ", 5));
// }
// {
//     // 11 masala 1 korinishi
//     let foo = [1,2,3]
//     foo.reverse()
//     console.log(foo);
// }
// {
//     //  11 masalani 2 korinishi
//     function foo(array){
//         array.reverse()
//         console.log(array);
//     }
//     console.log(foo([1, 2, 3]));
// }
// {
//     // 12 masala
//     let foo = [2, 1, 13, 4]
//     foo.sort((a,b)=> a-b)
//     console.log(foo);
//     //  12 masla 2 korinish
//     function son(array){
//         array.sort((a,b)=> a-b)
//         console.log(array);
//     }
//     console.log(son([2, 1, 13, 4]));
// }

