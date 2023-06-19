import * as fs from "fs";

const list = async () => {
  fs.readdir("./src/fs/files", function (err, files) {
    if (err) throw Error("FS operation failed");
    files.forEach(function (file) {
      console.log(file);
    });
  });
};

await list();
