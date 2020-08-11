import React from 'react'
import { useDispatch } from 'react-redux'
import { Colleague } from '../../store/types/colleague.type'
import { removeColleague, favouriteColleague } from '../../store/actions'
import cn from 'classnames'
import styles from './colleague-row.module.css'

interface ColleagueProps {
  index: number
  colleague: Colleague
}
export const ColleagueRow: React.FC<ColleagueProps> = (props) => {
  const { colleague, index } = props
  const dispatch = useDispatch()

  function handleDelete() {
    dispatch(removeColleague(index))
  }

  function handleFavorite() {
    dispatch(favouriteColleague(index, !colleague.favorite))
  }

  return (
    <div className={styles['container']}>
      <div
        className={cn(
          styles['name'],
          {
            [styles['favourite']]: colleague.favorite
          }
        )}
      >{colleague.name}</div>
      <div>
        <button onClick={() => handleDelete()}>Remove</button>
        <button onClick={() => handleFavorite()}>Favourite</button>
      </div>
    </div>
  )
}
