import fetch from "node-fetch";
import colors from "colors";
export default async (options) => {
    const url = "http://api.textart.io/figlet?text=";
    const res = await fetch(`http://api.textart.io/figlet/list_styles.json`);
    let list = await res.json();
    let fonts = list.contents.fonts;

    if (!options.render) {
        fonts.forEach((font) => {
            console.log(`${font}`.green);
        });
    } else {
        fonts.forEach(async (font) => {
            let res = await fetch(`${url}${encodeURI(font)}&style=${font}`);
            let text = await res.text();
            console.log(`\n${font}:\n${text}`.blue);
        });
    }
};
