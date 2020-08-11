import React, { useState, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { createColleague } from '../../store/actions'
import styles from './add-colleague.module.css'

export const AddColleague: React.FC = (props) => {
  const [name, setName] = useState('')
  const dispatch = useDispatch()

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value)
  }

  function handleCreate() {
    dispatch(createColleague({
      name,
      favorite: false
    }))
  }

  return (
    <div className={styles['container']}>
      <input className={styles['input']} onChange={handleChange} />
      <button className={styles['button']} onClick={handleCreate}>Create</button>
    </div>
  )
}
