import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteToDo } from "../redux/store";

const ToDo = ({ todo, onBtnClick}) => {

    return (
        <li key={todo.id} id={todo.id}>
            <Link to={`${todo.id}`}>{todo.text}</Link>
            <button onClick={onBtnClick}>X</button>
        </li>
    );
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onBtnClick : () =>  {
            dispatch(deleteToDo(ownProps.todo.id));
        }
    }
}

export default connect(null, mapDispatchToProps) (ToDo);
