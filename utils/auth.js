import cookie from 'cookie';

export const serializeCookie = (email) => {
  const cookieSerialized = cookie.serialize('email', email, {
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 3600,
    httpOnly: true,
    path: '/',
  });

  return cookieSerialized;
}
