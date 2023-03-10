import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import connectDB from '../../../config/connectDB'
import Users from '../../../models/user'
import bcrypt from 'bcrypt'

connectDB()

export default NextAuth({
  session: {
    jwt: true
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
      // const resUser = await Users.findById(user.sub)
      // session.emailVerified = resUser.emailVerified
      session.userId = user.sub
      return Promise.resolve(session)
    }
  }
})


const loginUser = async ({password, user}) => {
  const isMatch = await bcrypt.compare(password, user.password)
  if(!isMatch){
    console.log("hellodfiafadifd;fjadfjadsfjadfjads;fjdsifjidfjdsfij")
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