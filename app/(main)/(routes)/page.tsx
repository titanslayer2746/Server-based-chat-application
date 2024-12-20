import { ModeToggle } from '@/components/ui/mode-toggle'
import { UserButton } from '@clerk/nextjs'

function Home() {
  return (
    <div>
        <UserButton afterSignOutUrl="/"/>
        <ModeToggle/>
    </div>
  )
}

export default Home
