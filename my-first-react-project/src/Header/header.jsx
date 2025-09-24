import './header1.css';
import search from '/24-bell.svg';
import setting from '/24-gear-3.svg';
import ring from '/24-magnifier.svg';


function Header(){
    return (
        <header>
            <h1>Task Management Dashboard</h1>
            <nav>
                <ul>
                    <li><img src={search}/></li>
                    <li><img src={ring}/></li>
                    <li><img src={setting}/></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;