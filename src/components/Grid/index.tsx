import React, { FC } from 'react'

import Item from '../Item'
import './styles.css'

import { Gif } from 'support/types'

interface Props {
  items: Gif[]
}

const Grid: FC<Props> = ({ items }) => {
  const elements = items.map((item: any) => <Item key={item.id} gif={item} />)

  return (
    <div className='grid'>
      {elements}
    </div>
  )
}

Grid.displayName = 'Grid'

export default Grid
