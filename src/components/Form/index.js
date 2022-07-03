import TextInput from '../TextInput'
import './Form.css'

const Form = () => {
    return (
        <section className="form">
            <form>
                <h2>Fill the necessary data to create a new card</h2>
                <TextInput label="Name" placeholder="What's your name?" />
                <TextInput label="Role" placeholder="What's your role in the company?" />
                <TextInput label="Photo" placeholder="Image URL" />
            </form>
        </section>
    )
}

export default Form