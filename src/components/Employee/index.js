import './Employee.css'

const Employee = ({ name, photo, role, backgroundColor }) => {
    return (<div className='employee'>
        <div className='header'style={{ backgroundColor: backgroundColor }}>
            <img src={photo} alt={name}/>
        </div>
        <div className='footer'>
            <h4>{name}</h4>
            <h5>{role}</h5>
        </div>
    </div>)
}

export default Employee