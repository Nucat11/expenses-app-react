import "./ExpenseFilter.scss"

export default function ExpenseFilter({
  onDataChange,
  currentYear,
  expensesYears,
}) {
  const changeHandler = (e) => {
    onDataChange(e.target.value)
  }
  return (
    <div className='expense-filter'>
      <select
        name='filter'
        id='filter'
        onChange={changeHandler}
        value={currentYear}>
        <option value=''>All</option>
        {expensesYears.map(e => (
          <option value={e}>{e}</option>
        ))}
      </select>
    </div>
  )
}
