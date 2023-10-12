import { useReducer, useState } from "react"

function HookReduce() {
    // 1- começando com useReduce
    const [number, dispacth] = useReducer((state, action) => {
        return Math.random(state)
    })

    //2-avançando no useReduce
    const initialTask = [
        {id: 1, text: 'Fazer alguma coisa'},
        {id: 2, text: 'Fazer outra coisa'}
    ]

    const taskReduce = (state, action) => {
       switch (action.type) {
        case "ADD":
            const newTask = {
                id: Math.random(),
                text: taskText, 
            }
            
           setTaskText('')

           return [...state, newTask]
        
        case "DELETE":
            return state.filter((task) => task.id !== action.id)
        default:
            return state
       }
    }

    const [taskText, setTaskText] = useState('')
    const [tasks, dispacthTasks] = useReducer(taskReduce, initialTask)

    const handleSubmit = (e) => {
        e.preventDefault()
        
        dispacthTasks({type: "ADD"})
    }

    const removeTask = (id) => {

        dispacthTasks({type: 'DELETE', id: id})
    }

  return (
    <div>
        <h2>UseReduce</h2>
        <p>Número: {number}</p>
        <button onClick={dispacth}>Alterar Número!</button>

        <h3>Tarefas:</h3>

        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)} 
            />

            <input type="submit" value='Enviar' />
        </form>

        {tasks.map((task) => (
            <li key={task.id} onDoubleClick={() => removeTask(task.id)}>{task.text}</li>
        ))}
        <hr />
    </div>
  )
}

export default HookReduce