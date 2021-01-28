import cookie from 'cookie';

export default async (req, res) => {
  console.log('cookie: ', req.headers.cookie ?? '');
  const cookieSerialized = cookie.serialize('email', '', {
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: -1,
    httpOnly: true,
    path: '/',
  })
  res.setHeader('Set-Cookie', cookieSerialized)
  res.status(200).end()
}
