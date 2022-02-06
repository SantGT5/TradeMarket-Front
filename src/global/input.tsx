type InputType = {
  label: string
  type: string
  placeholder: string
  classNameInput: string
  classNameLabel: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  value: string
  name: string
}

export const Input = (props: InputType) => {
  return (
    <div>
      <p className={props.classNameLabel}>{props.label}</p>
      <input
        placeholder={props.placeholder}
        type={props.type}
        className={props.classNameInput}
        onChange={props.onChange}
        value={props.value}
        name={props.name}
      />
    </div>
  )
}
