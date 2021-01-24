import dbConnect from '@/utils/dbConnect';
import User from '@/models/User';

export default async (req, res) => {
  const { name, email, password, isSignup } = req.body;

  await dbConnect();

  const user = await User.findOne({ email });

  if (isSignup) {
    try {
      if (user) {
        res.status(400).end({
          success: false,
          message: `Account already existed for email ${email}`
        });
      }
      const newUser = await User({ name, email, password });
      res.status(201).end({ success: true, data: newUser });
    } catch(error) {
      res.status(400).end({ success: false });
    }
  } else {
  }

}
