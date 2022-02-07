import { InputType } from "../types/input.type"

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
