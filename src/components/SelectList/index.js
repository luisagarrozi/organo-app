import './SelectList.css'

const SelectList = (props) => {
    console.log(props.itens)

    return (
        <div className='select-list'>
            <label>{props.label}</label>
            <select required={props.required}>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default SelectList