import fetch from "node-fetch";

export default async () => {
  const url = "https://artii.herokuapp.com/make?text=";
  const res = await fetch(`https://artii.herokuapp.com/fonts_list`);
  const list = await res.text();
  let fonts = list.split("\n");
  fonts.forEach(async (font) => {
    const text = await fetch(`${url}${encodeURI(font)}&font=${font}`);
    return console.log(`\n${font}:\n${await text.text()}`);
  });
};
