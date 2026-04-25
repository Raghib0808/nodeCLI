import fs from "node:fs/promises";

const readFile = () => {
  const url = new URL("./package.json", import.meta.url);
  console.log(url)
  console.log(fs.readFileSync(url, "utf-8"));
};

const writeFile = async() => {
    const url = new URL("./demo.js", import.meta.url);
    await fs.writeFile(url, "console.log('hello world');");
}

writeFile();