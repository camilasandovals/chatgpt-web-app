import { Input } from "antd"
import { useState } from 'react'

export default function AskChat() {
    
    const [result, setShowResult] = useState()
    const handleAdd = async (value) => {
        if (value.length <4) return 
       
        const newRequest = {
            prompt: value
        }
        const response = await fetch('http://localhost:3000/request', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newRequest), 
    })
        const datos = await response.json()
        console.log(datos)
        console.log(datos.data)
        setShowResult(datos.data)
    }

    if(result) {
        return <p> {result}</p>
    }

    return (
        <section>
        
            <Input.Search
            allowClear
            enterButton= "Add"
            size= "large"
            onSearch={handleAdd}
            placeholder="Write your condern here"
            />

            
           
    
        </section>
    
        
    
      )
}