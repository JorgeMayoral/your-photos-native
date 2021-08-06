import Constants from "expo-constants"
import { setToken } from "../utils/tokenStorage"
import { setUser } from "../utils/userStorage"

const extra = Constants.manifest?.extra

export const signup = async (username: string, email: string, password: string): Promise<User | ErrorResponse> => {
  const url = `${extra?.apiUrl}/api/user`
  
  const userData = {username, email, password}
  
  const response = await fetch(url, {method: 'POST', headers: {
    "Content-Type": "application/json"
  }, body: JSON.stringify(userData)})
  const data = await response.json()

  if (data.error) {
    console.log(data.error)
    return data
  }

  await setUser(data.data)
  await setToken(data.token)

  return data.data
}