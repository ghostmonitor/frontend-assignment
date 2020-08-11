import React from 'react'
import { ColleaguesList } from '../ColleaguesList/colleagues-list.component'
import { AddColleague } from '../AddColleague/add-colleague.component'
import styles from './layout.module.css'

export const Layout: React.FC = () => {
  return (
    <div className={styles['layout']}>
      <AddColleague />
      <ColleaguesList />
    </div>
  )
}
