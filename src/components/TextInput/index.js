import './TextInput.css'

const TextInput = (props) => {

    const placeholder = `${props.placeholder}...` 

    const onType = (event) => {
        props.whenChanged(event.target.value)
    }

    return (
        <div className="text-input">
            <label>
                {props.label}
            </label>
            <input value={props.value} onChange={onType} required={props.required} placeholder={placeholder}/>
        </div>
    )
}

export default TextInput