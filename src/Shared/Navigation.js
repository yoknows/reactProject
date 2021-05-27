import {Link, NavLink} from 'react-router-dom';

function Navigation() {
    return (
    <nav>
        <ul>
            <li><NavLink to="/" activeStyle={{color:'red'}}>Search for Movies</NavLink></li>
            <li><NavLink to="/WatchList" activeStyle={{color:'red'}}>Videos Watch List</NavLink></li>
        </ul>
    </nav>
    )
}

export default Navigation;