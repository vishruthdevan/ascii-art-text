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
    const url = "http://api.textart.io/figlet.json?text=";
    if (options.font) {
        try {
            const res = await fetch(
                `${url}${encodeURI(text)}&style=${options.font}&encode=false`
            );
            let json = await res.json();
            console.log(json["contents"]["figlet"].magenta);
        } catch (err) {
            console.log(err.message);
        }
    } else {
        try {
            const res = await fetch(`${url}${encodeURI(text)}&encode=false`);
            let json = await res.json();
            console.log(json["contents"]["figlet"].magenta);
        } catch (err) {
            console.log(err.message);
        }
    }
};

export default check;
