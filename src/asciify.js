import fetch from "node-fetch";

const check = async (text, options) => {
  const url = "https://artii.herokuapp.com/make?text=";
  if (options.font) {
    try {
      const res = await fetch(`${url}${encodeURI(text)}&font=${options.font}`);
      console.log(await res.text());
    } catch (err) {
      console.log(err.message);
    }
  } else {
    try {
      const res = await fetch(url + encodeURI(text));
      console.log(await res.text());
    } catch (err) {
      console.log(err.message);
    }
  }
};

export default check;
