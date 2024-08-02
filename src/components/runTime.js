export const calculateTime = (distance, speed) => {
    const timeInMinutes = (distance / speed) * 60;
    return timeInMinutes;
};

export const formatTime = (timeInMinutes) => {
    const minutes = Math.floor(timeInMinutes);
    const seconds = Math.round((timeInMinutes - minutes) * 60);
    return `${minutes} minutes and ${seconds} seconds`;
};
