import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

export const addToDo = createAction("ADD");
export const deleteToDo = createAction("DELETE");

const reducer = createReducer([], {
    [addToDo]: (state, action) => {
        state.unshift({ text: action.payload.text, id: action.payload.id });
    },
    [deleteToDo]: (state, action) => state.filter((toDo) => toDo.id !== action.payload),
});

const store = configureStore({ reducer });
export default store;