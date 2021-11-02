import fetch from "node-fetch";

const check = async (text, options) => {
  const url = "https://artii.herokuapp.com/make?text=";
  if (options.font) {
    console.log(options.font);
  }
  if (text) {
    const res = await fetch(url + encodeURI(text));
    console.log(await res.text());
  }
};

export default check;
