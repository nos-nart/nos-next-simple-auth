import nc from 'next-connect';
import dbConnect from '@/middleware/database';
import User from '@/models/User';

const handler = nc()
  .use(dbConnect())
  .post(async (req, res) => {
    console.log('req: ', req);
    const { name, email, password, isSignup } = req.body;
    console.log('name: ', name);
    res.sendDate('success');
  })

export default handler;

// export default async (req, res) => {
//   const { name, email, password, isSignup } = req.body;

//   await dbConnect();

//   const user = await User.findOne({ email });

//   if (isSignup) {
//     console.log('isSignup: ', isSignup);
//     try {
//       if (user) {
//         res.status(400).json({
//           success: false,
//           message: `Account already existed for email ${email}`
//         });
//       }
//       const newUser = await User({ name, email, password });
//       res.status(201).json({ success: true, data: newUser });
//     } catch(error) {
//       res.status(400).json({ success: false });
//     }
//   } else {
//   }
// }
