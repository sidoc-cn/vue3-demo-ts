let Client = require("ssh2-sftp-client");
let sftp = new Client();
let path = require("path");
const chalk = require("chalk");
let fs = require("fs");

// 0.1 取参 ----------------------------------------------------------------------------------------------------
let deploy = "";
process.argv.forEach((val) => {
    if (val.includes("deploy")) {
        deploy = val.split("=").pop();
    }
});

// 0.2 配置 ----------------------------------------------------------------------------------------------------
let deployConfig = {};
switch (deploy) {
    case "114": {
        deployConfig["host"] = "192.168.10.99";
        deployConfig["port"] = "22";
        deployConfig["username"] = "root";
        deployConfig["password"] = "root";
        deployConfig["deployPath"] = "/var/www/html/1.1-train-manage/dist";
        break;
    }
    case "119": {
        deployConfig["host"] = "192.168.10.99";
        deployConfig["port"] = "22";
        deployConfig["username"] = "root";
        deployConfig["password"] = "root";
        deployConfig["deployPath"] = "/var/www/html/1.1-train-manage/dist";
        break;
    }
}
console.log(chalk.rgb(255, 0, 0)(`\n>>>>>>>>>>>>>>>>>>>>>>>>> .env.prod.${deploy} <<<<<<<<<<<<<<<<<<<<<<<<<<<\n`));

// 1.0 更新配置文件 --------------------------------------------------------------------------------------------------
let envFile = fs.readFileSync(`./.env.local.${deploy}`, "utf8");
let configInfo = [];
const lines = envFile.split(/\r?\n/);
for (let i = 0; i < lines.length; i++) {
    let l = lines[i];
    // 仅读取所有Vue配置
    if (l.startsWith("VUE_APP_")) {
        let arr = l.split("=");
        let value = arr[arr.length - 1].trim();
        if (arr.length < 2) {
            continue; // 如果小于2，说明配置项的名称或值缺失，即配置不完整
        }

        // 去掉无用字符
        value = value.replaceAll('"', "");
        // 过滤无用配置
        if (value.startsWith("http") === false) continue;

        // 生成key
        const buff = Buffer.from(value, "utf-8");
        const base64 = buff.toString("base64");

        configInfo.push({
            name: lines[i - 1],
            baseUrl: value,
            key: base64,
        });
    }
}
fs.writeFileSync("./public/config.json", JSON.stringify(configInfo, null, 4));
console.log(`\n配置更新完成：`);
console.log(chalk.rgb(0, 255, 0)(`> 打包前：./public/config.json`));
console.log(chalk.rgb(0, 255, 0)(`> 打包后：./dist/config.json`));

// 2.0> 基础配置 ----------------------------------------------------------------------------------------------------
let distPath = path.resolve(__dirname, "./dist");
let deployPath = "/var/www/html/1.1-train-manage/dist";
let serverConfig = {
    host: "192.168.10.99",
    port: "22",
    username: "root",
    password: "root",
};
// sftp.connect(serverConfig)
//     .then(() => {
//         return sftp.uploadDir(distPath, deployPath); // 参数一为本地路径，参数二为远程服务路径
//     })
//     .then((data) => {
//         console.log(data);
//         console.log("\n部署完成！");
//     })
//     .catch((err) => {
//         console.log(err);
//         console.log("\n部署时发生错误！");
//     })
//     .finally(() => {
//         sftp.end();
//     });

console.log(`\n部署完成：`);
console.log(chalk.rgb(0, 255, 0)(`> host：${deployConfig["host"]}`));
console.log(chalk.rgb(0, 255, 0)(`> path：${deployConfig["deployPath"]}`));

console.log(`\n\n`);
