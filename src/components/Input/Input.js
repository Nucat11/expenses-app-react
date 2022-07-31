import "./Input.scss"

export default function Input({ label, type, min, step, onChange, value }) {
  return (
    <div className='input'>
      <label
        htmlFor={label.toLowerCase()}
        className='input__label text--secondary text-color--secondary'>
        {label}
      </label>
      <input
        type={type}
        id={label.toLowerCase()}
        min={min}
        step={step}
        onChange={onChange}
        value={value ? value : ""}
        className='input__input text--secondary text-color--secondary'
        required
      />
    </div>
  )
}
