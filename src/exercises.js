function commonEnd(a, b) {
  if (!a || a.length === 0 || !b || b.length === 0) {
    return false;
  }
  else {
    const firstValA = a[0];
    const firstValB = b[0];

    const lastValA =  a[a.length - 1];
    const lastValB = b[b.length - 1];

    if (firstValA == firstValB || lastValA == lastValB) {
      return true;
    } else {
      return false;
  }

}
}

function endsMeet(values, n) {
  if (!values || values.length === 0 || values <= 0) {
    return [];
  }
  else {
  const firstValues = values[0];
  const lastValues = values[values.length-1];

  if (values>=1) {
    let newArray = [firstValues, lastValues];
  };
};
};

function difference(numbers) {
  // write your code here
}

function max(number) {
  // write your code here
}

function middle(values) {
  // write your code here
}

function increasing(numbers) {
  // write your code here
}

function everywhere(values, x) {
  // write your code here
}

function consecutive(numbers) {
  // write your code here
}

function balance(numbers) {
  // write your code here
  console.log("test");
}

function clumps(values) {
  // write your code here
}

/*
 * Exports all functions for use in external grader.js file. Do not modify.
 */

module.exports = {
  commonEnd,
  endsMeet,
  difference,
  max,
  middle,
  increasing,
  everywhere,
  consecutive,
  balance,
  clumps
};
