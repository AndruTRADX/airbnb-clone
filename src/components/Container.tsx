'use client'

interface ContainerProps {
  children: JSX.Element
  className?: string
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={`max-w-screen-3xl mx-auto xl:px-20 md:px-10 sm:px-2 px-4 ${className}`}
    >
      {children}
    </div>
  )
}

export default Container
