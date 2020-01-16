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
  };

};
};

function endsMeet(values, n) {
  let array = [];
  if (!values || values.length < n || !Number.isInteger(n) || n < 0) {
    return array;
  } else {
    if (n === 0) {
      return values;
    } else {
      for (let i = 0; i < n; i++) {
        if (values[i] !== undefined) {
          array.push(values[i]);
        }
      }
      for (let i = n; i > 0; i--) {
        if (values[values.length - i] !== undefined) {
          array.push(values[values.length - i]);
        }
      }
      return array;
    }
  }
}

function difference(numbers) {
if (!numbers || numbers < 1 || numbers.some(isNaN)) {
  return undefined;
} else {
    let largest = Number(Math.max.apply(null, numbers));
    let smallest = Number(Math.min.apply(null, numbers));
    let difference = largest - smallest;
       return difference;
  };
};

function max(number) {
  if (!number || number.length < 3 || number.some(isNaN) || number % 2 == 0 ) {
    return undefined;
  }
  else {
    var lastVal = number[number.length -1];
    var middleVal = number[(number.length -1)/2];
    var firstVal = number[0];
    if  (lastVal >= middleVal && lastVal >= firstVal) {
      return lastVal;
    }
    else if (middleVal >= lastVal && middleVal >= firstVal) {
      return middleVal;
    }
    else if (firstVal >= lastVal && firstVal >= middleVal) {
      return firstVal;
    };
  };
};

function middle(values) {
  let array = [];
if (values == undefined || values.length < 3 || values.length % 2 == 0 || values == undefined) {
  return [];
} else {
  let middle2 = values [(values.length - (Math.ceil(values.length / 2)))];
  let middle3 = values [(values.length -1) - (Math.ceil(values.length / 2))];
  array.push(middle3 , middle2)
  return array;
}
};

function increasing(numbers) {
/*if (numbers == undefined || numbers.length < 3 || numbers.some(isNaN) || !Numbers.isInteger(n)) {
  return false;
} else {
  var
} */
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
