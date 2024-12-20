import { ThemeProvider } from '@/components/providers/theme-provider'
import {
  ClerkProvider,
  SignInButton,
  SignedOut,
} from '@clerk/nextjs'
import './globals.css'
import { cn } from '@/lib/utils'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn(
          "bg-white dark:bg-[#313338]"
        )}>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <ThemeProvider 
          attribute="class"
          defaultTheme='dark'
          enableSystem
          storageKey='app-theme'
          >
          {children}
          </ThemeProvider>
          
        </body>
      </html>
    </ClerkProvider>
  )
}