// 更新版本号
let fs = require("fs");

let pkg = fs.readFileSync("./package.json", "utf8");
pkg = JSON.parse(pkg);

let varray = pkg.version.split(".");
varray[varray.length - 1] = parseInt(varray[varray.length - 1]) + 1;
pkg.version = varray.join(".");

fs.writeFileSync("./package.json", JSON.stringify(pkg, null, 2));
