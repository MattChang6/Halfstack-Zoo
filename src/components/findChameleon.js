// findChameleon.js

export const getRandomPosition = (maxWidth, maxHeight, imageWidth, imageHeight) => {
    const x = Math.floor(Math.random() * (maxWidth - imageWidth));
    const y = Math.floor(Math.random() * (maxHeight - imageHeight));
    return { x, y };
};
