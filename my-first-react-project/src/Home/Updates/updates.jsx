import './updates.css'

function Updates(props){
    return (
        <div className="updateCont" style={{borderLeft: `8px solid ${props.color}`}}>
            <p className="updateTitle">{props.title}</p>
            <p className="updateNum">{props.number}</p>
            <p className="updateDes">{props.description}</p>
        </div>
    )
}
export default Updates