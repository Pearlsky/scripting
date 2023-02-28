/*  
Problem:
    scheduleMeeting(..) should take a start time (in 24-hour
    format as a string “hh:mm”) and a meeting duration (number
    of minutes). It should return true if the meeting falls entirely
    within the work day (according to the times specified in
    dayStart and dayEnd); return false if the meeting violates
    the work day bounds. 
*/


// function to convert timestring (hh:mm) to minutes
const resolveMinutes = (timeString) => {
    const timeStringArr = timeString.split(":").map((el) => Number(el));
    timeStringArr[0]*= 60;

    return timeStringArr.reduce((x, y) => x + y, 0);
};

// constants
const dayStart = resolveMinutes("07: 30");
const dayEnd = resolveMinutes("17: 45");


const scheduleMeeting = (time, duration) => {
    const scheduledTimeStart = resolveMinutes(time);
    const scheduledTimeEnd = scheduledTimeStart + duration;

    return (dayStart <= scheduledTimeStart) && (dayEnd >= scheduledTimeEnd);
};