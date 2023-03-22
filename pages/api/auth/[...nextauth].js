import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import connectDB from '../../../config/connectDB'
import Users from '../../../models/user'
import bcrypt from 'bcrypt'

connectDB()

export default NextAuth({
  session: {
    jwt: true,
    maxAge: 60 * 60
  },
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      async authorize(credentials) {
        const email = credentials.email;
        const password = credentials.password;
        const user = await Users.findOne({email})
        console.log(user)
        if (user) return loginUser({password, user})

        throw new Error("No such email.");
      }
    })
  ],
  pages: {
    signIn: '/login',
    error: '/login',
  },
  // SQL or MongoDB database (or leave empty)
  database: process.env.DATABASE_URL,
  callbacks: {
    session: async (session, user) => {
      const resUser = await Users.findById(user.sub)
      session.user = resUser
      return Promise.resolve(session)
    }
  }
})


const loginUser = async ({password, user}) => {
  const isMatch = await bcrypt.compare(password, user.password)
  if(!isMatch){
    // throw new Error("Password Incorrect.");
    const hashPass = await bcrypt.hash(password, 12)
    Users.findOneAndUpdate(
      {email: user.email},
      {$set: {password: hashPass}},
      (err) => {
        if (err) throw new Error("Something wrong")
      }
    )
  }

  return user;
}

const registerUser = async ({email, password}) => {
  const hashPass = await bcrypt.hash(password, 12)
  const newUser = new Users({ email, password: hashPass })
  await newUser.save()
  throw new Error("Success! Check your email.");
}