export async function getMessage() {
   const response = await fetch("http://localhost:3001/")
   if(!response.ok) {
    throw new Error("Problem communicating with the server")
   }
   const data = await response.text()
   return data
   
}

export async function getUser() {
    const response = await fetch('http://localhost:3001/user');
    if(!response.ok) throw new Error("Error getting user")
    const data = response.json()
    return data

}