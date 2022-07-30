import "./ExpenseFilter.scss"

export default function ExpenseFilter({ onDataChange, currentYear }) {
  const changeHandler = (e) => {
    onDataChange(e.target.value)
  }
  return (
    <div>
      <select
        name='filter'
        id='filter'
        onChange={changeHandler}
        value={currentYear}>
        <option value=''>All</option>
        <option value='2020'>2020</option>
        <option value='2021'>2021</option>
        <option value='2022'>2022</option>
        <option value='2023'>2023</option>
      </select>
    </div>
  )
}
