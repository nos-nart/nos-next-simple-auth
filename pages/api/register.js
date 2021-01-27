import dbConnect from '@/utils/database';
import User from '@/models/User';

export default async (req, res) => {
  const { name, email, password } = req.body;

  await dbConnect();

  const user = await User.findOne({ email });
  try {
    if (user) {
      res.status(400).json({ success: false, message: `Account already existed for email ${email}` })
      return
    }
    const persitedUser = await User.create({ name, email, password });
    res.status(201).json({ success: true, data: persitedUser });
  } catch (error) {
    res.status(400).json({ success: false });
  }
}
