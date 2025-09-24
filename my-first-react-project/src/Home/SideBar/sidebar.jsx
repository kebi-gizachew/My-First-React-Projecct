import './sidebar.css';
import bald from '/icons8-brown-curly-hair-lady-in-light-green-shirt.png'
import ring from '/24-bell.svg';
function First(props){
    return (
        <div className="wholeDiv">
        <div className="firstDiv">
            <img src={bald}/>
            <div className="fDiv">

            <h1>{props.name}</h1>
            <p>{props.work}</p>
            </div>

        </div>
            <p className="email">{props.email}</p>
        </div>
    )
}
function Team(props){
    return(
        <div className="teamDiv">
            <img src={props.image}/>
            <div className="sDiv">
                <p className="teamDivp1">{props.name}</p>
                <p className="teamDivp2">{props.work}</p>
            </div>
        </div>
    )
}
function Notifications(props){
    return(
        <div className="notiDiv">
            <div className="noteCircle"><img src={ring}/></div>
            <div className="ring">

            <h1>{props.status}</h1>
            <p className="descript">{props.description}</p>
            <p className="hour">{props.hours}</p>
           </div>
            </div>

    )
}
function RecentActive(props){
    return(
    <div className="recentiv">
       <p><strong>{props.mem}</strong> {props.note}<span className="blueRecent"> {props.job}</span></p>
       <p className="recentHours">{props.hour}</p>
    </div>
    )
}

export {First, Team, Notifications, RecentActive}   