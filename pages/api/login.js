import dbConnect from '@/utils/database';
import User from '@/models/User';
const bcrypt = require('bcryptjs');
import { serializeCookie } from '@/utils/auth';

export default async (req, res) => {
  const { email, password } = req.body;

  await dbConnect();

  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(500).json({ success: false, message: `No email found` })
      return
    }
    const isPwMatched = await bcrypt.compare(password, user.password);
    if (!isPwMatched) { throw new Error() }

    const cookieSerialized = serializeCookie(email);
    res.setHeader('Set-Cookie', cookieSerialized);
    res.status(201).json({ success: true, message: `Login successfully` })
  } catch (error) {
    res.status(400).json({ success: false });
  }
}
