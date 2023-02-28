

const resolveMinutes = (timeString) => {
    const timeStringArr = timeString.split(":").map((el) => Number(el));
    timeStringArr[0]*= 60;

    return timeStringArr.reduce((x, y) => x + y, 0);
};

const dayStart = resolveMinutes("07: 30");
const dayEnd = resolveMinutes("17: 45");

const scheduleMeeting = (time, duration) => {
    const scheduledTimeStart = resolveMinutes(time);
    const scheduledTimeEnd = scheduledTimeStart + duration;

    return (dayStart <= scheduledTimeStart) && (dayEnd >= scheduledTimeEnd);
};