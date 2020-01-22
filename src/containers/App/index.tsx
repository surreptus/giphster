import 'normalize.css'

import debounce from 'debounce'
import React, { FC, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import * as api from 'support/api'
import { add, set } from 'support/store'

import Search from 'components/Search'
import Grid from 'components/Grid'
import Modal from 'components/Modal'
import { Gif } from 'support/types'

import './styles.css'

const PAGE_SIZE = 12

const App: FC = () => {
  const dispatch = useDispatch()
  const [query, setQuery] = useState('')
  const [offset, setOffset] = useState(0)
  const items = useSelector((state: Gif[]) => state)

  /**
   * handler for the scroll event which updates the offset by adding one page
   * size of elements
   */

  const handleScroll = useCallback(() => {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
      return setOffset(offset + PAGE_SIZE)
    }
  }, [offset])

  /**
   * resets the offset and sets the query state to the value provided
   */

  const handleSearch = debounce((value: string) => {
    setOffset(0)
    setQuery(value)
  }, 500)

  /**
   * on change of the query or offset fetches a set of data and dispatches
   * an action to set the redux state with the new value
   */

  useEffect(() => {
    const fetchData = async () => {
      const results = await api.read({
        offset,
        query
      })

      const action = offset === 0
        ? set
        : add

      dispatch(action(results.data))
    }

    fetchData()
  }, [query, offset, dispatch])

  /**
   * attaches an event listener to the window to capture when the user scrolls
   * to the bottom of the page. then updates the offset to a new page that
   * triggers the fetch for more data
   */

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll])

  const description = query
    ? `Displaying Results for "${query}"`
    : `Displaying results for what's currently trending`

  return (
    <div className='app'>
      <header className='app__header'>
        <h1 className='app__title'>
          Giphster
        </h1>

        <div className='app__search'>
          <Search onChange={handleSearch} />
        </div>
      </header>

      <div className='app__content'>
        <p className='caption app__description'>
          {description}
        </p>

        <Grid items={items} />
      </div>

      <Modal />
    </div>
  )
}

App.displayName = 'App'

export default App;
