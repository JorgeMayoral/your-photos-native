import Constants from "expo-constants"
import { useUser } from "../hooks/useUser"
import { getUser } from "../utils/userStorage"

const extra = Constants.manifest?.extra

export const fetchUserPhotos = async (): Promise<Photo[]> => {
  const user = await getUser()

  if (!user) {
    return []
  }

  const url = `${extra?.apiUrl}/api/photo/user/${user.id}`

  const response = await fetch(url)
  const data = await response.json()

  return data.data
}