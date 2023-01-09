import * as fs from "fs";

export default function handler(req, res) {
  fs.readFile(
    `Components/Blogdata/${req.query.slug}.json`,
    "utf-8",
    (err, data) => {
      if (err) {
        res.status(500).json({ error: "no blog found" });
      }
      console.log(req.query.slug);
      res.status(200).json(JSON.parse(data));
    }
  );
}
