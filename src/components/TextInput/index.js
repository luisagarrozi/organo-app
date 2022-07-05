import './TextInput.css'

const TextInput = (props) => {

    const placeholder = `${props.placeholder}...` 

    const onType = (event) => {
        value = event.target.value
        console.log(value)
    }

    return (
        <div className="text-input">
            <label>
                {props.label}
            </label>
            <input value={value} onChange={onType} required={props.required} placeholder={placeholder}/>
        </div>
    )
}

export default TextInput