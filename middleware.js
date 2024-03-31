export { default } from 'next-auth/middleware';

export const conflict = {
  matcher: ['/properties/add', '/profile', '/properties/saved', '/messages'],
};
