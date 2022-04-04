import React, { useRef } from 'react'
import  '../style.css'

type inputProps = {
  todo : string
  setTodo : React.Dispatch<React.SetStateAction<string>>
  HandleAdd : (e:React.FormEvent) => void
}


const InputField = ({todo, setTodo, HandleAdd}: inputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <form className='input' onSubmit={(e) => {
      HandleAdd(e)
      inputRef.current?.blur()
      }}>
       <input type="input" ref={inputRef} value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder='Enter a Task' className='input-box' />
       <button type="submit" className='input-submit'>Go</button>
    </form>
  )
}

export default InputField