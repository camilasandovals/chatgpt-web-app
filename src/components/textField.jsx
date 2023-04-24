import { Input } from "antd"

export default function TextField() {

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
        const data = await response.json()

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