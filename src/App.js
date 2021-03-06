import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';

function App() {
  const teams = [
    {
      name: 'Developers',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      name: 'Devops',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    },
    {
      name: 'UX and Design',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5'
    },
    {
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      name: 'Management',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    }
  ]

  const [employees, setEmployees] = useState([])

  const onNewEmployeeAdded = (employee) => {
    setEmployees([...employees, employee])
  }

  return (
    <div className="App">
      <Banner />
      <Form onNewEmployee={employee => onNewEmployeeAdded(employee)}/>

      {teams.map(team => <team 
        key={team.name} 
        name={team.name} 
        primaryColor={team.primaryColor} 
        secondaryColor={team.secondaryColor} 
        employees={employees.filter(employee => employee.team === team.name)}
      />)}   
    </div>
  );
}

export default App;
