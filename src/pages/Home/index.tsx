import react, { useState, useEffect } from 'react'
import './styles.css'
import {Card} from '../../components/Card'
import { Button } from '../../components/Button';
import Student from '../../Interfaces/Students';
import {Inputs} from '../../components/Inputs';
export function Home() {

  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState<Student[]>([]);
  const [user, setUser] = useState({name: '', avatar: ''});

  function handleAddStudent(){
    // if(studentName === "" || studentName === null) return;
    if(studentName.trim().length == 0) return;  //trim tira espaço do inicio e do final da string
    const newStudent: Student = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    };

    setStudents([...students, newStudent]);
    setStudentName('');
  }

  function handleRemoveStudent(props: any){
    console.log(students)
    var student= students.find((stu: any) => stu.name == studentName);

    if(student){
      // setStudents([...students].splice(students == student.filter(), 1));
      setStudents(students.filter(stu => stu != student))
    }
    setStudentName('');
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
        <h1>Lista de presença <span>{studentName}</span></h1>

        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt='foto de perfil'/>
        </div>
      </header>

      <Inputs 
        type= 'text' 
        placeholder= 'Digite o nome...' 
        onChange={(e:any) => setStudentName(e.target.value)}
        value= {studentName}
      />

      <Button type='button' onClick={handleAddStudent} >
        adicionar
      </Button>
      
      {
        students.map(student => <Card key={student.time} name={student.name} time={student.time} />)        
      }

      <Button type='button' onClick={handleRemoveStudent}>
        remover
      </Button>
    </div>
  )
}


