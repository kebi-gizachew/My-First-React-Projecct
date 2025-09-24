import './recent.css';
function Recent(props){
    return(
        <div className="recentDiv">
            <h1>{props.title}</h1>
            <p className="des">{props.description}</p>
            <p className="memb">{props.member} {props.date}</p>
        </div>
    )
}
export default Recent;