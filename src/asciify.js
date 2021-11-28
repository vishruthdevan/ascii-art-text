import fetch from "node-fetch";
import colors from "colors";

// let colourList = [
//   brightRed,
//   brightGreen,
//   brightYellow,
//   brightBlue,
//   brightMagenta,
//   brightCyan,
//   brightWhite,
//   red,
//   green,
//   yellow,
//   blue,
//   magenta,
//   cyan,
//   white,
// ];

const check = async (text, options) => {
  const url = "https://artii.herokuapp.com/make?text=";
  if (options.font) {
    try {
      const res = await fetch(`${url}${encodeURI(text)}&font=${options.font}`);
      console.log((await res.text()).magenta);
    } catch (err) {
      console.log(err.message);
    }
  } else {
    try {
      const res = await fetch(url + encodeURI(text));
      console.log((await res.text()).cyan);
    } catch (err) {
      console.log(err.message);
    }
  }
};

export default check;
