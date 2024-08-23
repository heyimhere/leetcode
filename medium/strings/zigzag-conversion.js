// function convert(s, numRows) {
//   // code here
//   if(numRows === 1 || s.length < numRows) return s;
//   let rows = [];
//   let count = 0;
//   let reverse = false;
//   for(let i = 0; i < numRows; i++) {
//     rows[i] = [];
//   };
//   for(let i = 0; i < s.length; i++) {
//     rows[count].push(s[i]);
//     reverse ? count-- : count++;
//     if(count === numRows - 1 || count === 0) {
//       reverse = !reverse
//     }
//   }
//   const results = rows.reduce((acc, curr) => {
//     return acc + curr.join('');
//   }, '');
//   return results;
// }

// practice 1
function convert(s, numRows) {
  if(numRows === 1 || s.length < numRows) return s;
  let rows = [];
  let count = 0;
  let reverse = false;

  for(let i = 0; i < numRows; i++) {
    rows[i] = [];
  }

  for(let i = 0; i < s.length; i++) {
    rows[count].push(s[i]);
    reverse ? count-- : count++;
    if(count === numRows - 1 || count === 0) {
      reverse = !reverse;
    }
  }

  const results = rows.reduce((acc, curr) => {
    return acc + curr.join('');
  }, '');
  return results;
}

function convert(s, numRows) {
  if(numRows === 1 || s.length < numRows) return s;
  let rows = [];
  let count = 0;
  let reverse = false;

  for(let i = 0; i < numRows.length; i++) {
    rows[i] = [];
  }

  for(let i = 0; i < s.length; i++) {
    rows[count].push(s[i]);
    reverse ? count-- : count++;
    if(count === numRows - 1 || count === 0) {
      reverse = !reverse;
    }
  }

  const results = rows.reduce((acc, curr) => {
    return acc + curr.join('');
  }, '');
  return results;
}

function convert(s, numRows) {
  if(numRows === 1 || s.length < numRows) return s;
  let rows = [];
  let count = 0;
  let reverse = 0;

  for(let i = 0; i < numRows; i++) {
    rows[i] = [];
  }

  for(let i = 0; i < s.length; i++) {
    rows[count].push(s[i]);
    reverse ? count-- : count++;
    if(count === numRows - 1 || count === 0) {
      reverse = !reverse;
    }
  }

  const results = rows.reduce((acc, curr) => {
    return acc + curr.join('');
  }, '');
  return results;
}

// practice 2
function convert(s, numRows) {
  if(numRows === 1 || s.length < numRows) return s;
  let rows = [];
  let count = 0;
  let reverse = false;

  for(let i = 0; i < numRows; i++) {
    rows[i] = [];
  }

  for(let i = 0; i < s.length; i++) {
    rows[count].push(s[i]);
    reverse ? count-- : count++;
    if(count === numRows - 1 || count === 0) {
      reverse = !reverse;
    }
  }

  const results = rows.reduce((acc, curr) => {
    return acc + curr.join('');
  }, '');

  return results;
}

// practice 3
function convert(s, numRows) {
  if(numRows === 1 || s.length < numRows) return s;
  let rows = [];
  let count = 0;
  let reverse = false;

  for(let i = 0; i < numRows; i++) {
    rows[i] = [];
  }

  for(let i = 0; i < s.length; i++) {
    rows[count].push(s[i]);
    reverse ? count-- : count++;
    if(count === numRows - 1 || count === 0) {
      reverse = !reverse;
    }
  }

  const results = rows.reduce((acc, curr) => {
    return acc + curr.join('');
  }, '');

  return results;
}


// practice 4
function convert(s, numRows) {
  if(numRows === 1 || s.length < numRows) return s;
  let rows = [];
  let count = 0;
  let reverse = false;

  for(let i = 0; i < numRows; i++) {
    rows[i] = [];
  }

  for(let i = 0; i < s.length; i++) {
    rows[count].push(s[i]);
    reverse ? count-- : count++;

    if(count === numRows - 1 || count === 0) {
      reverse = !reverse;
    }
  }

  const results = rows.reduce((acc, curr) => {
    return acc + curr.join('');
  }, '');

  return results;
}

// practice 5
function conver(s, numRows) {
  if(numRows === 1 || s.length < numRows) return s;
  let rows = [];
  let count = 0;
  let reverse = false;

  for(let i = 0; i < numRows; i++) {
    rows[i] = [];
  }

  for(let i = 0; i < s.length; i++) {
    rows[count].push(s[i]);
    reverse ? count-- : count++;
    if(count === numRows - 1 || count === 0) {
      reverse = !reverse;
    }
  }

  const results = rows.reduce((acc, curr) => {
    return acc + curr.join('');
  }, '');

  return results;
}

// practice 6
function convert(s, numRows) {
  if(numRows === 1 || s.length < numRows) return s;
  let rows = [];
  let count = 0;
  let reverse = false;

  for(let i = 0; i < numRows; i++) {
    rows[i] = [];
  }

  for(let i = 0; i < s.length; i++) {
    rows[count].push(s[i]);
    reverse ? count-- : count++;

    if(count === numRows - 1 || count === 0) {
      reverse = !reverse;
    }
  }

  const result = rows.reduce((acc, curr) => {
    return acc + curr.join('');
  }, '');
  return result;
}

// practice 7
function convert(s, numRows) {
  if(numRows === 1 || s.length < numRows) return s;

  let rows = [];
  let count = 0;
  let reverse = false;

  for(let i = 0; i < numRows; i++) {
    rows[i] = [];
  }

  for(let i = 0; i < s.length; i++) {
    rows[count].push(s[i]);
    reverse ? count-- : count++;
    if(count === numRows - 1 || count === 0) {
      reverse = !reverse;
    }
  }

  const result = rows.reduce((acc, curr) => {
    return acc + curr.join('');
  }, '');

  return result;
}

// practice 8
function convert(s, numRows) {
  if(numRows === 1 || s.length < numRows) return s;
  let rows = [];
  let count = 0;
  let reverse = false;

  for(let i = 0; i < numRows; i++) {
    rows[i] = [];
  }

  for(let i = 0; i < s.length; i++) {
    rows[count].push(s[i]);
    reverse ? count-- : count++;
    if(count === numRows - 1 || count === 0) {
      reverse = !reverse;
    }
  }

  const result = rows.reduce((acc, curr) => {
    return acc + curr.join('');
  }, '');

  return result;
}


// coding interview sample

console.log('convert', convert("PAYPALISHIRING", 3));
