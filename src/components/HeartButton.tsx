'use client'

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

import useFavorite from '@/hooks/useFavorite'
import { SafeUser } from '@/types'

interface HeartButtonProps {
  listingId: string
  currentUser?: SafeUser | null
}

const HeartButton: React.FC<HeartButtonProps> = ({
  listingId,
  currentUser,
}) => {
  const { hasFavorited, toggleFavorite } = useFavorite({
    listingId,
    currentUser,
  })

  return (
    <div
      onClick={toggleFavorite}
      className="
        relative
        hover:scale-105
        transition
        cursor-pointer
      "
    >
      <AiOutlineHeart
        size={28}
        className="
          fill-white/90
          absolute
          -top-[2px]
          -right-[2px]
        "
      />
      <AiFillHeart
        size={24}
        className={hasFavorited ? 'fill-rose-500/90' : 'fill-slate-900/40'}
      />
    </div>
  )
}

export default HeartButton
