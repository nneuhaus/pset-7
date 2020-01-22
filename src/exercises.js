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
  let array1 = [];
  let array2 = [];
  if (!values || values.length < n || n < 1 || !Number.isInteger(n)) {
    return [];
  }
  else {
      array1 = values.slice(0, n);
      array2 = values.slice(values.length - n, values.length + 1);
      newArray = array1.concat(array2);
      return newArray;
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
  } else {
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
  let newArray = [];
  if (!values || values.length < 3 || values.length % 2 === 0) {
    return [];
  }
  else {
    middleMiddle = values[(values.length - 1) / 2];
    firstMiddle = values[((values.length - 1) / 2) - 1];
    lastMiddle = values[((values.length - 1) / 2) + 1];

    newArray.push(firstMiddle, middleMiddle, lastMiddle);

    return newArray;
  }


}

function increasing(numbers) {
  let flag = 0;
  if (!numbers || numbers.length < 3 || numbers.some(isNaN) || numbers.some(Number.isInteger) === false) {
    return false;
  }
  else {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < numbers[i + 1] && numbers[i + 1] < numbers[i + 2]) {
          flag = 1;
          return true;
        }
      }
      if (flag === 0) {
        return false;
      }
    }
  }
  function everywhere(values, x) {
    let flag = 1;
    if (!values || values.length < 1 || x === undefined) {
      return false;
    }
    else {

      for (let i = 0; i < values.length - 1; i++) {
        if (values[i] === x) {
          flag = 0;
        }
        else if (values[i - 1] === x || values[i + 1] === x) {
          flag = 0;
        }
        else {
          flag = 1;
          return false;
        }
      }
    }
    if (flag === 0) {
      return true;
    }

  }

  function consecutive(numbers) {
    let flag = 0;
    if (!numbers || numbers.length < 3 || numbers.some(isNaN) || numbers.some(Number.isInteger) === false) {
      return false;
    }
    else {

      for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] % 2 === 0 && numbers[i + 1] % 2 === 0 && numbers[i + 2] % 2 === 0) {
          flag = 1;
          break;
        }
        else if (numbers[i] % 2 !== 0 && numbers[i + 1] % 2 !== 0 && numbers[i + 2] % 2 !== 0) {
          flag = 1;
          break;
        }
        else {

        }
      }
      if (flag === 1) {
        return true;
      }
      else {
        return false;
      }
    }
  }

  function balance(numbers) {
    if (!numbers || numbers.length < 2 || numbers.some(isNaN) || numbers.some(Number.isInteger) === false) {
      return false;
    }
    else {
      let flag = 0;

      for (let i = 0; i < numbers.length; i++) {
        splitLeft = i;
        splitRight = i + 1;
        let sumLeft = 0;
        let sumRight = 0;
        for (let j = 0; j <= splitLeft; j++) {
          sumLeft = sumLeft + numbers[j];

        }
        for (let k = i + 1; k <= numbers.length - 1; k++) {
          sumRight = sumRight + numbers[k];

        }
        if (sumLeft === sumRight) {
          flag = 1;
          return true;
        }
      }
      if (flag !== 1) {
        return false;
      }
    }
    console.log("test");
  }

  function clumps(values) {
    let clumpCount = 0;
    if (!values) {
      return -1;
    }
    else {
       for (let i = 0; i < values.length - 1; i++) {
        if (values[i - 1] === values[i]) {

        }
        else if (values[i] === values[i + 1]) {
          clumpCount++;
        }
      }
      return clumpCount;
    }
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
