import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeCost, addCar } from '../store';

export default function CarForm() {
  const dispatch = useDispatch();
  const {name, cost}= useSelector((state)=> {
    return {name: state.form.name, cost: state.form.cost};
  })

  const handleNameChange =(e)=> {
    dispatch(changeName(e.target.value));
  }
  const handleCostChange= (e)=> {
    const carCost= parseInt(e.target.value) || 0;
    dispatch(changeCost(carCost));
  }
  const handleSubmit= (e)=> {
    e.preventDefault();
    dispatch(addCar({ name, cost}))
  }

  return (
    <div className='car-form panel'>
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">
              Name
            </label>
            <input value={name} onChange={handleNameChange} className="input is-expanded" />
          </div>
          <div className="field">
            <label className="label">
              Cost
            </label>
            <input value={cost || ''} onChange={handleCostChange} type="number" className="input is-expanded" />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  )
}
