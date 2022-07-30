import "./Input.scss"

export default function Input({ label, type, min, step, onChange, value }) {
  return (
    <div>
      <label htmlFor={label.toLowerCase()}>{label}</label>
      <input
        type={type}
        id={label.toLowerCase()}
        min={min}
        step={step}
        onChange={onChange}
        value={value ? value : ''}
      />
    </div>
  )
}
