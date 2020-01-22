import React, { FC, useEffect } from 'react'

import { useModal } from 'support/contexts/modal'

import './styles.css'

const Modal: FC = () => {
  const { hide, item } = useModal()

  /**
   * we'll check when the item is set and disable scrolling so the user doesn't
   * fetch more gifs in the background while they are viewing
   */

  useEffect(() => {
    document.body.style.overflow = item
      ? 'hidden'
      : 'auto'
  }, [item])

  if (!item) {
    return null
  }

  return (
    <div onClick={hide} className='modal'>
      <div className='modal__content'>
        <img
          className='modal__image'
          src={item.images.original.url}
          alt={item.title}
        />
      </div>
    </div>
  )
}

Modal.displayName = 'Modal'

export default Modal
