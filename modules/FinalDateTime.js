const date = new Date();
const dateNow = date.toDateString();
const timeNow = date.toLocaleTimeString();
const finalDateTime = dateNow.concat(', ', timeNow);

export default finalDateTime;