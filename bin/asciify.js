import fetch from "node-fetch";

const check = async (text, options) => {
  const url = "https://artii.herokuapp.com/make?text=";
  if (options.font) {
    try {
      const res = await fetch(`${url}${encodeURI(text)}&font=${options.font}`);
      return console.log(await res.text());
    } catch (err) {
      return console.log(err.message);
    }
  }
  if (text) {
    try {
      const res = await fetch(url + encodeURI(text));
      return console.log(await res.text());
    } catch (err) {
      return console.log(err.message);
    }
  }
};

export default check;
