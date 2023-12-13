'use client'

import { useCallback } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

interface CounterProps {
  title: string
  subtitle: string
  value: number
  onChange: (value: number) => void
}

const Counter = ({ title, subtitle, value, onChange }: CounterProps) => {
  const onAdd = useCallback(() => {
    onChange(value + 1)
  }, [onChange, value])

  const onReduce = useCallback(() => {
    if (value === 1) {
      return
    }

    onChange(value - 1)
  }, [onChange, value])

  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col">
          <h3 className="font-medium">{title}</h3>
          <p className="font-light text-gray-600">{subtitle}</p>
        </div>
        <div className="flex flex-row items-center gap-4">
          <div
            onClick={onReduce}
            className="
            w-10
            h-10
            rounded-full
            bg-gray-50
            border-[1px]
            border-neutral-400
            flex
            items-center
            justify-center
            text-neutral-600
            cursor-pointer
            hover:bg-gray-100
            transition
          "
          >
            <AiOutlineMinus />
          </div>
          <p
            className="
            font-bold 
            text-xl 
            text-neutral-600
            select-none
          "
          >
            {value}
          </p>
          <div
            onClick={onAdd}
            className="
            w-10
            h-10
            rounded-full
            bg-gray-50
            border-[1px]
            border-neutral-400
            flex
            items-center
            justify-center
            text-neutral-600
            cursor-pointer
            hover:bg-gray-100
            transition
          "
          >
            <AiOutlinePlus />
          </div>
        </div>
      </div>

      <hr className='border-gray-200 m-0 p-0' />
    </>
  )
}

export default Counter
