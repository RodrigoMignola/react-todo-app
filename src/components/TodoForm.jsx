import React, {useState, useEffect, useRef } from 'react';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
           id: Math.floor(Math.random() * 10000),
           text: input
        });

        setInput('');
    };

    return ( 
        <form className = 'todo-form' onSubmit={handleSubmit}>
            {props.edit ? (
            <>
            <input
            placeholder = 'Actualizar Tarea'
            value = { input }
            name = "text"
            className = "todo-input edit"
            onChange={handleChange}
            ref={inputRef}
            />
            <button className = 'todo-button edit' onClick={handleSubmit}>
                EDITAR
            </button>
            </>
            ) :
            (
            <>
            <input 
            placeholder = 'Nueva Tarea'
            value = { input }
            name = "text"
            className = "todo-input"
            onChange={handleChange}
            ref={inputRef}
            />
            <button className = 'todo-button' onClick={handleSubmit}>
                AGREGAR
            </button>
            </>
            )}
        </form>
    );
}

export default TodoForm;