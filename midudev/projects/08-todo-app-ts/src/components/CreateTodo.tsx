import React, { useState } from "react";
import { type Todo as TodoType } from "../types";

interface Props {
  saveTodo: ({ title }: {title: TodoType['title']}) => void
}

export function CreateTodo ({ saveTodo }: Props) : JSX.Element {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) : void => {
    event.preventDefault()
    saveTodo({ title: inputValue })
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        className="new-todo"
        onChange={(event) => setInputValue(event.target.value)}
        value={inputValue}
        placeholder="¿Qué quieres hacer?"
        autoFocus
      />
    </form>
  )
}