import {Link, NavLink} from 'react-router-dom';

function Navigation() {
    return (
    <nav>
        <ul>
            <li><NavLink exact to="/" activeStyle={{color:'red', fontWeight: "bold",}}>Search for Movies</NavLink></li>
            <li><NavLink to="/WatchList" activeStyle={{color:'red',fontWeight: "bold",}}>Videos Watch List</NavLink></li>
        </ul>
    </nav>
    )
}

export default Navigation;