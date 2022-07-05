import TextInput from '../TextInput'
import './Form.css'
import Button from '../Button'
import SelectList from '../SelectList'

const Form = () => {

    const teams = [
        'Developers',
        'Front-End',
        'Data Science',
        'Devops',
        'UX and Design',
        'Mobile',
        'Management'
    ]

    const onSave = (event) => {
        event.preventDefault()
        console.log('Form submited')
    }

    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Fill the necessary data to create a new card</h2>
                <TextInput required={true} label="Name" placeholder="What's your name?" />
                <TextInput required={true} label="Role" placeholder="What's your role in the company?" />
                <TextInput required={true} label="Photo" placeholder="Image URL" />
                <SelectList required={true} label="Team" itens={teams}/>
                <Button>
                   Create new card 
                </Button>
            </form>
        </section>
    )
}

export default Form