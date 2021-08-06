import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_KEY = '@user_profile'

export const getUser = async (): Promise<User | false> => {
  const user = await AsyncStorage.getItem(USER_KEY)
  return user && JSON.parse(user)
};

export const setUser = async (user: User): Promise<void> => {
  const stringifiedUser = JSON.stringify(user)
  await AsyncStorage.setItem(USER_KEY, stringifiedUser)
}

export const removeUser = async (): Promise<void> => {
  await AsyncStorage.removeItem(USER_KEY)
}