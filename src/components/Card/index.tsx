import Student from '../../Interfaces/Students';
import './styles.css';

export function Card(props: Student){
    return(
        <div className='card'>
            <strong> {props.name} </strong>
            <small> {props.time} </small>
        </div>
    )
}