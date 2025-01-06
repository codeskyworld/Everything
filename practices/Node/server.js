import http from "http";
import fs from "fs/promises";
import url from "url";

const PORT = process.env.PORT;
const server = http.createServer(async (req, res) => {
  //res.setHeader("Content-Type", "text/html");
  //res.statusCode = 404;
  try {
    if (req.method === "GET") {
      let filePath;
      if (req.url === "/") {
        filePath = path.join(__dirname, "index.html");
      } else if (req.url === "/about") {
      } else if (req.url === "/contact") {
      } else {
        throw new Error("ERROR 404 PAGE NOT FOUND");
      }
      const data = await fs.readFile(filepath);
      res.writeHead({ "Content-Type": "text/html" });
      res.write;
    } else {
      throw new Error("Method not supported");
    }
  } catch (error) {
    writeHead(500, { "Content-Type": "text/html" });
    res.end("Server Not Found");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
