import React from 'react'
import { IntroCard } from './IntroCard'

export const IntroContent:React.FC<{intro: any}> = ({intro}) => {
  return (
    <div>{intro.map((item: any, index: number) => <IntroCard data={item} key={index} />)}</div>

  )
}
