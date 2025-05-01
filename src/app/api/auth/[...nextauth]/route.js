import connectDB from "@/app/lib/connectDB";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import GitHubProvider from "next-auth/providers/github";
export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: "Email",
          type: "text",
          required: true,
          placeholder: "Your Email",
        },
        password: {
          label: "Password",
          type: "password",
          required: true,
          placeholder: "Your Password",
        },
        username: {
          label: "User Name",
          type: "text",
          required: true,
          placeholder: "Your name",
        },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }
        const { email, password } = credentials;
        if (email) {
          const db = await connectDB();
          const currentUser = await db.collection("users").findOne({ email });
          // const currentUser = users.find((user) => user.email === email);
          console.log(currentUser);
          if (currentUser.password === password) {
            return currentUser;
          }
        }
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  //   pages: {
  //   }
  callbacks: {
    async jwt({ token, account, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.type = user.type;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.type = token.type;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

// const users = [
//   {
//     id: 1,
//     name: "Rakib",
//     email: "r@gmail.com",
//     type: "admin",
//     password: "password",
//     image: "https://picsum.photos/200/300",
//   },
//   {
//     id: 2,
//     name: "Arif",
//     email: "a@gmail.com",
//     type: "admin",
//     password: "password",
//     image: "https://picsum.photos/200/300",
//   },
//   {
//     id: 1,
//     name: "Jahidul",
//     email: "j@gmail.com",
//     type: "moderator",
//     password: "password",
//     image: "https://picsum.photos/200/300",
//   },
// ];
export { handler as GET, handler as POST };
