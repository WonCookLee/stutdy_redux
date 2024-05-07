import { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import ToDo from "./ToDo";
import { addToDo, deleteToDo } from "../redux/store";

function HomePage({toDos}) {
    const [text, setText] = useState("");

    const onChange = (e) => {
        setText(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        setText("");
    };

    const dispatch = useDispatch();
    const onClick = () => {
        const id = Date.now();
        dispatch(addToDo({ text, id })); // the way to set multiple data in payload
    };

    return (
        <>
            <h1>To Dos</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button onClick={onClick}>Add</button>
            </form>
            <ul>
                {toDos.map((state) => (
                    <ToDo todo={state} key={state.id} />
                ))}
            </ul>
        </>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {toDos : state}
}


export default connect (mapStateToProps) (HomePage);