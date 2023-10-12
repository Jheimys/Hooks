import React, { useState } from 'react'

const HookUseStates = () => {
    let userName = 'João'
    const [name, setName] = useState('James')

    const changeNames = () => {
        userName = 'João José'

        setName('James Bassani')
    }
    
    // 2 - usestate e input
    const [age, setAge] = useState(18)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(age)
    }
  return (
    <div>
        <hr />
        <h2>UseState</h2>
        <p>Variável: {userName}</p>
        <p>useState: {name}</p>

        <button onClick={() => changeNames()}>Mudar nomes</button>

        {/* useState e input */}
        <p>Digite sua idade:</p>
        <form onSubmit={handleSubmit}>
            <input 
              type='text' 
              value={age}
              onChange={(e) => setAge(e.target.value)} 
            />

            <input type='submit' value="Enviar" />
        </form>
        
        <p>Você tem {age} anos!</p>
        <hr />
    </div>
  )
}

export default HookUseStates