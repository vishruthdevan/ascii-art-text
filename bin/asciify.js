import fetch from "node-fetch";

const check = async (text, options) => {
  const url = "https://artii.herokuapp.com/make?text=";
  if (options.font) {
    const res = await fetch(`${url}${encodeURI(text)}&font=${options.font}`);
    return console.log(await res.text());
  }
  if (text) {
    const res = await fetch(url + encodeURI(text));
    return console.log(await res.text());
  }
};

export default check;
