const h = [0,1,0,2,1,0,1,3,2,1,2,1];
// const h = [4,2,0,3,2,5];
// function trap(height) {
//   // code here
//   let res = 0;
//   for(let i = 0; i < height.length; i++) {
//     let leftMax = 0;
//     let rightMax = 0;

//     for(let j = 0; j < i; j++) {
//       leftMax = Math.max(leftMax, height[j]);
//     }

//     for(let j = i + 1; j < height.length; j++) {
//       rightMax = Math.max(rightMax, height[j]);
//     }

//     const water = Math.min(leftMax, rightMax) - height[i];

//     if(water > 0) {
//       res += water;
//     }

//   }

//   return res;
// }

function trap(height) {
  // code here
  let left = 0;
  let right = height.length - 1;

  let leftMax = 0;
  let rightMax = 0;

  let response = 0;

  while(left < right) {
    leftMax = Math.max(leftMax, height[left]);
    if(height[left] < leftMax) {
      response += leftMax - height[left];
    }

    rightMax = Math.max(rightMax, height[right]);
    if(height[right] < rightMax) {
      response += rightMax - height[right];
    }

    height[left] < height[right] ? left++ : right--;
  }
  return response;
}

console.log('trap', trap(h));