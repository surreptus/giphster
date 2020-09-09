import React, { FC, createContext, useContext, useState } from 'react'

import { Gif } from 'support/types'

interface Context {
  item?: Gif;
  show: (gif: Gif) => void;
  hide: () => void;
}

export const ModalContext = createContext<Context>({
  show: (gif) => {},
  hide: () => {}
})

export const ModalManager: FC = ({ children }) => {
  const [item, setItem] = useState<Gif | undefined>()

  const show = (gif: Gif) => setItem(gif)

  const hide = () => setItem(undefined)

  return (
    <ModalContext.Provider value={{show, hide, item}}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModal () {
  return useContext(ModalContext)
}
