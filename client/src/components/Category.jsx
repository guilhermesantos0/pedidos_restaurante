import { Link } from 'react-router-dom';
import '../styles/components/Category.css';

function Category(props) {
    return(
        <Link to={`/category/${props.category}`}>
            <div className="Category">
                <h3>{props.categoryname}</h3>
            </div>
        </Link>
    )
}

export default Category