import { Link } from 'react-router-dom'

const Navbar=()=>{
    return(
        <>
        <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/add-book">Add Book</Link></li>
          <li><Link to="/books-list">Books List</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
        </>
    )

}

export default Navbar