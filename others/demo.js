const str = "我是{{name}}，来自{{from}}";

const trans = (str, data = { name: 123 }) => {
  const res = str.replace(/\{\{.*?\}\}/g, function (match, key) {
    console.log(match, key);
    return data[key];
  });
};
//   const r = str.match(/(?<=\{\{\s*).*?(?=\s*\}\})/g);

trans(str);
