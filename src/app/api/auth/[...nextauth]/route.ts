import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import connect from "@/utils/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

const { handlers } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          await connect();
          const user = await User.findOne({ email: credentials.email });

          if (!user) {
            throw new Error("Invalid email!")
          }

          const isCorrectPwd = bcrypt.compareSync(
            String(credentials.password),
            user.password
          );

          if (!isCorrectPwd) {
            throw new Error("Wrong password");
          }


          const { password, ...userInfo } = user._doc;

          console.log(userInfo)

          return userInfo;
        } catch (error) {
          console.log(error);
          if (error instanceof Error) {
            throw new Error(error.message);
          } else {
            throw new Error("An unknown error occurred");
          }
        }
      },
    }),
  ],
  secret: process.env.AUTH_SECRET, // Dùng để mã hóa như JWT
  callbacks: {
    async session({session, token}) {
        if (token) {
          session.user.id = token._id as string;
          session.user.username = token.username;
        }

        return session;
    },
    async jwt({token, user}) {
        if (user) {
          token._id = user._id;
          token.username = user.username;
        }

        return token;
    },
  },
  pages: {
    error: "/dashboard/login"
  }
});

export const { GET, POST } = handlers;
