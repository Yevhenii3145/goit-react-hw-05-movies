import { useState } from "react";
import { nanoid } from "nanoid";
import fields from "./fields";

export default function MoviesSearchForm({ onSubmit }) {
    const [state, setState] = useState({ search: "" });

    const handleChange = ({ target }) => {
        const { value } = target;
        setState(prevState => ({
            ...prevState,
            search: value,
        }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ ...state });
        setState({ search: "" });
    }

    const id = nanoid();

    return (
        <form onSubmit={handleSubmit} >
            <label htmlFor={id}></label>
            <input id={id} value={state.search} onChange={handleChange} {...fields.search} />
            <button type="submit">Search</button>
        </form>
    )
}