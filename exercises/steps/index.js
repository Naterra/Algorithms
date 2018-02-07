// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


// Ver 1
// function steps(n) {
//     for(let row = 0; row <n; row++){
//         let stair ='';
//
//         for(let column = 0; column < n; column++){
//             if(column <= row){
//                 stair += '#';
//             }else{
//                 stair += '';
//             }
//         }
//
//     }
//     return stair;
// }


// Ver 2 with recursion
function steps(n, row = 0, stair ='') {
  if (n ===row){
      return;
  }

  if(n === stair.length){
      console.log(stair);
      steps(n, row + 1);
      return;
  }

  if(stair.length <= row){
      stair +='#';
  }else{
      stair +=' ';
  }

  steps(n, row, stair);
}

// Ver last
// function steps(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log('#'.repeat(i).padEnd(n))
//     }
// }


module.exports = steps;