import "./ExpenseFilter.scss"
import "./Expand"
import Select from "react-select"

export default function ExpenseFilter({
  onDataChange,
  expensesYears,
}) {


  const options = [
    { value: "", label: "All" },
    ...expensesYears.map((e) => ({
      value: e,
      label: e,
    })),
  ]

  const changeHandler = (e) => {
    onDataChange(e.value.toString())
  }
  return (
    <div className='expense-filter text--primary text-color--primary' value=''>
      <Select
        defaultValue={options[0]}
        onChange={changeHandler}
        options={options}
        isSearchable={false}
        className='expense-filter__select'
        classNamePrefix="expense-filter__select"
      />
    </div>
  )
}
