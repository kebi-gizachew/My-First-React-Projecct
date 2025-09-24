
import './App.css'
import Header from './Header/header.jsx'
import Updates from './Home/Updates/updates.jsx'
import Task from './Home/Task/task.jsx';
import Recent from'./Home/Recent/recent.jsx';
import SideComponents from './Home/SideBar/sideComponents/sidecomponents.jsx';
import Footer from './Footer/footer.jsx';
function App(){
    return (
    <>
       <Header/>
            <div className="updateOrder">
            <Updates color="blue" title="TOTAL TASKS" number={4} description="All tasks in the system"/>
            <Updates color="green" title="ACTIVE PROJECTS" number={3} description="Currently running projects"/>
            <Updates color="orange" title="TEAM MEMBERS" number={4} description="People in your team"/>
            <Updates color="grey" title="NOTIFICATIONS" number={3} description="Recent updates"/>
            <div className="sideBarl">
            <SideComponents/>
            </div>
            </div>
        <div className="taskOrder">
    <Task title="E-commerce Platform" description="Building a modern online shopping experience" number="8" date="2/15/2024"/>
    <Task title="Mobile App" description="Cross-platform mobile application development" number="5" date="3/1/2024"/>
    <Task title="Analytics Dashboard" description="Real-time data visualization and reporting" number="3" date="1/30/2024"/>

</div>  
<h1 className="recentTask">Recent Tasks</h1>
<div className="recentOrder">
    <Recent title="Design Homepage" description="Create wireframes and mockups for the new homepage layout" member="Sarah Chen" date="1/15/2024"/>
    <Recent title="Setup Database" description="Configure PostgreSQL database and create initial schemas" member="Mike Johnson" date="1/20/2024"/>
    <Recent title="Write Documentation" description="Document API endpoints and component usage" member="Alex Rivera" date="1/10/2024"/>
    <Recent title="Implement Authentication" description="Add user login and registration functionality" member="Emma Davis" date="1/25/2024"/>

    </div>   
    <Footer/>
    </>
    )
}

export default App