import axios from 'axios'
import { NextAuthOptions } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'

async function refreshToken(token: JWT): Promise<JWT> {
  const res = await axios.post(
    `${process.env.NEST_API}/auth/refresh`,
    // {
    //   refreshToken: token.backendTokens.refreshToken,
    // },
    {
      headers: {
        authorization: `Refresh ${token.backendTokens.refreshToken}`,
        'Content-Type': 'application/json',
      },
    },
  )
  console.log('refreshed')
  const response = await res.data
  return {
    ...token,
    backendTokens: response,
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        if (!credentials?.username || !credentials?.password) return null
        const { username, password } = credentials
        // const res = await axios.post(
        //   `${process.env.NEST_API}/auth/login`,
        //   //   {
        //   //     body: JSON.stringify({
        //   //       username,
        //   //       password,
        //   //     }),
        //   //   },
        //   {
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //       username,
        //       password,
        //     }),
        //   },
        // )
        const res = await fetch(`${process.env.NEST_API}/auth/login`, {
          method: 'POST',
          body: JSON.stringify({
            username,
            password,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        })
        if (res.status === 401) {
          console.log('401', res.statusText)
          return null
        }
        const user = await res.json()
        return user
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // console.log('token', token)
      // console.log('user', user)
      if (user) return { ...token, ...user }
      if (new Date().getTime() < token?.backendTokens?.expiresIn) return token
      return await refreshToken(token)
    },
    async session({ session, token }) {
      session.user = token.user
      session.backendTokens = token.backendTokens
      return session
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
