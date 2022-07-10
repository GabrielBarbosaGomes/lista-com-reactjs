import './styles.css';

export function Button(props: any){
    return(
        <button type={props.type} onClick={props.onClick}>
            {props.children}
        </button>
    )
}