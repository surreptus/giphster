import React, { FC } from 'react'
import { Provider } from 'react-redux'

import { ModalManager } from 'support/contexts/modal'
import store from 'support/store'

const Root: FC = ({ children }) => (
  <ModalManager>
    <Provider store={store}>
      {children}
    </Provider>
  </ModalManager>
)

Root.displayName = 'Root'

export default Root
