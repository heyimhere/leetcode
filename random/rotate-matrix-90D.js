const rotate = (arr) => {
  // code here
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr[i].length; j++) {
      let temp = arr[i][j];
      arr[i][j] = arr[j][i];
      arr[j][i] = temp;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let left = 0;
    let right = arr[i].length - 1;

    while (left < right) {
      let temp = arr[i][left];
      arr[i][left] = arr[i][right];
      arr[i][right] = temp;
      left++;
      right--;
    }
  }

  return arr;
};

console.log(
  "rotate 1",
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
);

console.log(
  "rotate 2",
  rotate([
    [1, 2],
    [3, 4],
  ]),
);
