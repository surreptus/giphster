import React, { FC, useState } from 'react'

import { useModal } from 'support/contexts/modal'

import Loading from 'components/Loading'

import './styles.css';

interface Props {
  gif: any;
}

const Item: FC<Props> = ({ gif }) => {
  const { show } = useModal()
  const [status, setStatus] = useState('pending')

  /**
   * on clicking this item, we'll set the current modal gif to it, this will
   * trigger the modal component to render
   */

  const handleClick = () => show(gif)

  /**
   * changes the status of the item to success, removing the overlay
   */

  const handleLoad = () => setStatus('success')

  const pendingClassname = status === 'pending'
    ? 'item__pending--visible'
    : 'item__pending--hidden'

  return (
    <div onClick={handleClick} className='item'>
      <div className='item__container'>
        <img
          className='item__image'
          alt={gif.title}
          onLoad={handleLoad}
          src={gif.images.downsized.url}
        />

        <div className={`${pendingClassname} item__pending`}>
          <Loading />
        </div>
      </div>
    </div>
  )
}

Item.displayName = 'Item'

export default Item
