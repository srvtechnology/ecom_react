import {Link} from 'react-router-dom';


export default function Reg(){
    return(
        <div>
            <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                <a className="navbar-brand" href="#">WebSiteName</a>
                </div>
                <ul className="nav navbar-nav">
               
                <li className="active"><Link to="/admin/registration">Registration </Link></li>
                <li><Link to="/admin/login">Login</Link></li>
               
                </ul>
            </div>
            </nav>
            
 
        </div>
    );
 }