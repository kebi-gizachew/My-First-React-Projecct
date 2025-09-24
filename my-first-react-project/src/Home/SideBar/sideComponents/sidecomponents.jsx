import "./sidecomponents.css";
import {First, Team, Notifications, RecentActive} from '../sidebar.jsx';
import bald from '/icons8-bald-man-in-green-jacket.png';
import brown from '/icons8-brown-hair-business-lady-with-glasses.png';
import long from '/icons8-long-curly-hair-lady-with-glasses.png';
import man from '/icons8-man-in-blue-t-shirt.png';


function SideComponents(){
    return(
        <div className="sideComp">
           <First name="John Doe" work="Project Manager" email="jhon@example.com"/>
           <h1>Team Members</h1>
           <Team name="Sarah Chen" work="UI/UX Designer" image={brown}/>
           <Team name="Mike Johnson" work="Backend Developer" image={bald}/>
           <Team name="Alex Rivera" work="Technical Writer" image={man}/>
           <Team name="Emma Davis" work="Frontend Developer" image={long}/>

           <h1>Notifications</h1>
           <Notifications status="Task Completed" description="Documentation has been finished by Alex Rivera" hours="2 hours ago"/>
           <Notifications status="Deadline Approaching" description="Homepage design is due in 3 days" hours="4 hours ago"/>
           <Notifications status="New Team Member" description="EmmaDavis joined the project" hours="1 day ago"/>

           <div className="activity">
            <h1>Recent Activity</h1>
            <RecentActive mem="Sarah Chen" note="updated" job="Homepage Design" hour="30 minutes ago"/>
            <RecentActive mem="Mike Johnson" note="commented on" job="Database Setup" hour="1 hour ago"/>
            <RecentActive mem="Alex Rivera" note="completed" job="API Documentation" hour="2 hours ago"/>

            
           </div>
        </div>
    )
}
export default SideComponents;