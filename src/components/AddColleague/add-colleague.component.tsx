import React, { useState, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { createColleague } from '../../store/actions'

export const AddColleague: React.FC = (props) => {
  const [name, setName] = useState('')
  const dispatch = useDispatch()

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value)
  }

  function handleAddCollleague() {
    dispatch(createColleague({
      name,
      favorite: false
    }))
  }

  return (
    <div className="input-group shadow-sm">
      <input type="text" className="form-control" onChange={handleChange} placeholder="Name" />
      <div className="input-group-append">
        <button type="button" className="btn btn-outline-secondary" onClick={handleAddCollleague}>Add</button>
      </div>
    </div>
  )
}
