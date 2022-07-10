import './styles.css';

export function Inputs(props: any){
    return(
        <input 
            value={props.value}
            type={props.type}
            placeholder={props.placeholder}
            onChange={props.onChange}
        />
    )
}