import NextAuth from "next-auth";

import githubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    githubProvider({
      clientId: process.env.GITHUB_CLIENT,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
