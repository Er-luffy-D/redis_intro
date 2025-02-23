import express from "express";
import { createClient } from "redis";

const app = express();
app.use(express.json());

const client = createClient();
client.on("error", (err) => console.log("Redis client error", err));

app.post("/submit", async (req, res) => {
  const problemId = req.body.problemId;
  const code = req.body.code;
  const language = req.body.language;
  try {
    await client.lPush(
      "problems",
      JSON.stringify({ code, language, problemId })
    );
    // do db stuff
    res.status(200).send("Submission recieved and stored");
  } catch (err) {
    console.log("Redis Error ", err);
    res.status(500).send("Failed to store submission");
  }
});

async function startServer() {
  try {
    await client.connect();
    console.log("Redis Connected");
    app.listen(3000, () => {
      console.log("Server is running at 3000");
    });
  } catch (err) {
    console.log("Failed to connect to Redis ", err);
  }
}

startServer();
