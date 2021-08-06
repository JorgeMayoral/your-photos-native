import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"

export const useUser = () => {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)

  const readStorage = async () => {
    setLoading(true)
    const userValue = await AsyncStorage.getItem('@user_profile')
    const tokenValue = await AsyncStorage.getItem('@user_token')

    if (userValue !== null && tokenValue !== null) {
      setUser(JSON.parse(userValue))
      setToken(tokenValue)
      setLoading(false)
    }
  }

  useEffect(() => {
    readStorage()
  }, [])

  return {loading, user, token}
}