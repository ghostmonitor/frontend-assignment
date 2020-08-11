import React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../store/store'
import { ColleagueRow } from '../ColleagueRow/colleague-row.component'
import styles from './colleagues-list.module.css'

export const ColleaguesList: React.FC = (props) => {
  const colleagues = useSelector((state: AppState) => state.colleagues)

  return (
    <div className={styles['container']}>
      {colleagues.map((colleague, index) =>
        <ColleagueRow
          colleague={colleague}
          index={index}
        />
      )}
    </div>
  )
}
