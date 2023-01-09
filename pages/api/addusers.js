import User from "../../Components/models/User";
import connectDb from "../../Components/middleware/mongoose";

const handler = async (req, res) => {
  if (req.method === "POST") {
    console.log(req.body);
    for (let i = 0; i < req.body.length; i++) {
      let p = new User({
        name: req.body[i].name,
        email: req.body[i].email,
        password: req.body[i].password,
      });
      await p.save();
    }
    res.status(200).json({ suceess: "success" });
  } else {
    res.status(400).json({ error: "This not vaalid" });
  }
};
export default connectDb(handler);
