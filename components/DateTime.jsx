'use client'
import React, { useEffect, useState } from 'react'

const DateTime = () => {

    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const time = setInterval(() => {
            setDateTime(new Date())
        }, 1000);
        return () => clearInterval(time);
    }, []);

  return (
    <div className='text-gray-sub'>
      {` ${dateTime.toLocaleDateString('en-CA', {month: "long", day: "numeric", year: "numeric"})} ${dateTime.toLocaleTimeString('en-US', {hour: "2-digit", minute: "2-digit"})}`}
    </div>
  )
}

export default DateTime
