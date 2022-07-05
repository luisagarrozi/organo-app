import TextInput from '../TextInput'
import './Form.css'
import Button from '../Button'
import SelectList from '../SelectList'

const Form = (props) => {

    const teams = [
        'Developers',
        'Front-End',
        'Data Science',
        'Devops',
        'UX and Design',
        'Mobile',
        'Management'
    ]

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [photo, setPhoto] = useState('')
    const [team, setTeam] = useState('')


    const onSave = (event) => {
        event.preventDefault()
        props.onNewEmployee({
            name,
            role,
            photo,
            team
        })
    }

    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Fill the necessary data to create a new card</h2>
                <TextInput required={true} label="Name" placeholder="What's your name?" 
                value={name}
                whenChanged={value => setName(value)}/>
                <TextInput required={true} label="Role" placeholder="What's your role in the company?" 
                 value={role}
                 whenChanged={value => setRole(value)}/>
                <TextInput required={true} label="Photo" placeholder="Image URL" 
                 value={photo}
                 whenChanged={value => setPhoto(value)}/>
                <SelectList required={true} label="Team" itens={props.teams}
                value={team}
                whenChanged={value => setTeam(value)}/>
                <Button>
                   Create new card 
                </Button>
            </form>
        </section>
    )
}

export default Form