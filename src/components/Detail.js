import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteToDo } from "../redux/store";

const DetailPage = ({toDos, dispatchDelete}) => {
    
    // console.log("toDos", toDos);
    const navigate = useNavigate();
    const param = useParams();

    const onClickBackBtn = () => navigate(-1);
    const onClickHomeBtn = () => navigate("/");
    const todo = toDos?.find((item) => item.id === parseInt(param.id));
    const others = toDos?.filter((todo) => todo.id !== parseInt(param.id));
    //console.log(todo);
    const onDelete = () => {
        dispatchDelete(todo?.id);
        navigate("/");
    }

    return (
        <>
            <h1>Detail of {todo?.text} <button onClick={onDelete}>X</button></h1>
            <b>자세한 설명은 생략한다.</b>
            <h2>Others</h2>
            <ul>
                {others.map((todo) => (
                    <Link key={todo.id} to={`/${todo.id}`}>
                        <li>{todo.text}</li>
                    </Link>
                ))}
            </ul>
            <button onClick={onClickBackBtn}> Go Back</button>
            <button onClick={onClickHomeBtn}> Go Home</button>
        </>
    );
};

const mapStateToProps = (state, ownProps) => {
    // console.log("state", state);
    // console.log("ownProps", ownProps);
    return {toDos : state}
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchDelete : (id) =>  {
            dispatch(deleteToDo(id));
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (DetailPage);