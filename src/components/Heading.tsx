'use client'

interface HeadingProps {
  title: string
  subtitle?: string
  center?: boolean
}


const Heading = ({ title, subtitle, center }: HeadingProps) => {
  return (
    <div className={center ? 'text-center' : "text-start"}>
      <h2 className="text-2xl font-bold text-neutral-800">
        {title}
      </h2>
      <p className="font-light text-neutral-500 mt-2">
        {subtitle}
      </p>
    </div>
  )
}

export default Heading