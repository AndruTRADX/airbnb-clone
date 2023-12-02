'use client'

import Container from '@/components/Container'
import Logo from './Logo'
import Search from './Search'
import UserMenu from './UserMenu'
import { SafeUser } from '@/types'

interface NavbarProps {
  currentUser?: SafeUser | null
}

const Navbar = ({ currentUser }: NavbarProps) => {

  return (
    <nav className="fixed w-full shadow-sm bg-white/80 backdrop-blur z-10">
      <div className="py-4 border-b">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </nav>
  )
}

export default Navbar
