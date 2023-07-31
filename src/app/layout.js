import './globals.css'
import { Inter } from 'next/font/google'
import CustomThemeProvider from './themes/CustomThemeProvider'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'nehat.dev',
  description: 'nehat.dev',
  icons:'/newlogo.png'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={inter.className}>
        <CustomThemeProvider>
          {children}
        </CustomThemeProvider>
        </body>
    </html>
  )
}
