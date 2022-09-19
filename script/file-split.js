// 分割省市区级联文件

let fs = require("fs");
const path = require("path");

const splitFile = (filepath, callback) => {
    let cityFile = fs.readFileSync(path.resolve(__dirname, filepath), "utf8");
    const cityMap = JSON.parse(cityFile);
    for (let key in cityMap) {
        fs.writeFileSync(path.resolve(__dirname, callback(key)), JSON.stringify(cityMap[key], null, 2));
    }
};

// 市
splitFile("../src/components/cascader/area-json/city/city.json", (key) => {
    return `../src/components/cascader/area-json/city/city-${key}.json`;
});

// 区
splitFile("../src/components/cascader/area-json/area/area.json", (key) => {
    return `../src/components/cascader/area-json/area/area-${key}.json`;
});

// 街道
splitFile("../src/components/cascader/area-json/street/street.json", (key) => {
    return `../src/components/cascader/area-json/street/street-${key}.json`;
});
