import User from "../../Components/models/User";
import connectDb from "../../Components/middleware/mongoose";

const handler = async (req, res) => {
  let users = await User.find();

  res.status(200).json({ users });
};
export default connectDb(handler);
