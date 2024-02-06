import { exportConsole } from "./Basic/export.js";
import http from "http";

exportConsole();

http
  .createServer((req, res) => {
    res.end("Hello, world!");
  })
  .listen(3000);
