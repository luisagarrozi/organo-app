import './SelectList.css'

const SelectList = (props) => {

    return (
        <div className='select-list'>
            <label>{props.label}</label>
            <select onChange={event => props.whenChanged(event.target.value)} required={props.required} value={props.value}>
            <option value=""></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default SelectList