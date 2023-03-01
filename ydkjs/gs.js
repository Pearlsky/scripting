/*  
A. Problem:
    scheduleMeeting(..) should take a start time (in 24-hour
    format as a string “hh:mm”) and a meeting duration (number
    of minutes). It should return true if the meeting falls entirely
    within the work day (according to the times specified in
    dayStart and dayEnd); return false if the meeting violates
    the work day bounds. 
*/

/* My First Solution:*/

// function to convert timestring (hh:mm) to it's equivalent in minutes
const resolveMinutes = (timeString) => {
  const timeStringArr = timeString.split(":").map((el) => Number(el));
  timeStringArr[0] *= 60;

  return timeStringArr.reduce((x, y) => x + y, 0);
};

// constants
const dayStart = resolveMinutes("07: 30");
const dayEnd = resolveMinutes("17: 45");

// function to compare time
const scheduleMeeting = (time, duration) => {
  const scheduledTimeStart = resolveMinutes(time);
  const scheduledTimeEnd = scheduledTimeStart + duration;

  return dayStart <= scheduledTimeStart && dayEnd >= scheduledTimeEnd;
};

/*
B. Problem:
    The range(..) function takes a number as its first argument,
    representing the first number in a desired range of numbers.
    The second argument is also a number representing the end of
    the desired range (inclusive). If the second argument is omit-
    ted, then another function should be returned that expects
    that argument.
*/

// My first solution

const range = (rangeStart, rangeEnd) => {
  const rangeArray = [];
  let i = rangeStart;

  //   buggy conditionals
  if (rangeStart && rangeEnd >= 0) {
    while (i <= rangeEnd) {
      rangeArray.push(i);
      i++;
    }
    return rangeArray;

    // buggy conditionals
  } else if (rangeStart && !rangeEnd) {
    return function (omittedRangeEnd) {
      while (i <= omittedRangeEnd) {
        rangeArray.push(i);
        i++;
      }
      return rangeArray;
    };
  }
};

// Kyle's solution

function range(start, end) {
  start = Number(start) || 0;
  if (end === undefined) {
    return function getEnd(end) {
      return getRange(start, end);
    };
  } else {
    end = Number(end) || 0;
    return getRange(start, end);
  }
  function getRange(start, end) {
    var ret = [];
    for (let i = start; i <= end; i++) {
      ret.push(i);
    }
    return ret;
  }
}
