import Constants from "expo-constants"
import { getToken } from "../utils/tokenStorage"

const extra = Constants.manifest?.extra

export const deleteUserPhoto = async (id: number): Promise<boolean> => {
  const url = `${extra?.apiUrl}/api/photo/${id}`

  const token = await getToken()
  
  if (!token) {
    return false
  }

  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  const data = await response.json()

  return true
}