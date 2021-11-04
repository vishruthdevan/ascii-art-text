import fetch from "node-fetch";

export default async (options) => {
  const url = "https://artii.herokuapp.com/make?text=";
  const res = await fetch(`https://artii.herokuapp.com/fonts_list`);
  const list = await res.text();
  let fonts = list.split("\n");

  if (!options.render) {
    fonts.forEach((font) => {
      console.log(`${font}`);
    });
  } else {
    fonts.forEach(async (font) => {
      let res = await fetch(`${url}${encodeURI(font)}&font=${font}`);
      let text = await res.text();
      console.log(`\n${font}:\n${text}`);
    });
  }
};
