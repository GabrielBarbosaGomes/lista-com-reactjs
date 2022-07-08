import react, { useState, useEffect } from 'react'
import './styles.css'
import {Card} from '../../components/Card'
import Student from '../../Interfaces/Students';
export function Home() {

  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState<Student[]>([]);
  const [user, setUser] = useState({name: '', avatar: ''});

  function handleAddStudent(){
    const newStudent: Student = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    };

    setStudents([...students, newStudent]);
  }

  useEffect(()=>{
    fetch('https://api.github.com/users/GabrielBarbosaGomes').then(Response => Response.json().then(data => {
      setUser({
        name: data.name,
        avatar: data.avatar_url,
      })
    }))
  },[])

  return (
    <div className='container'>
      <header>
        <h1>Lista de presença</h1>

        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt='foto de perfil'/>
        </div>
      </header>

      <input 
        type= 'text' 
        placeholder= 'Digite o nome...' 
        onChange={e => setStudentName(e.target.value)}
      />

      <button type='button' onClick={handleAddStudent}>
        Adicionar
      </button>
      
      {
        students.map(student => <Card key={student.time} name={student.name} time={student.time} />)        
      }
    </div>
  )
}


