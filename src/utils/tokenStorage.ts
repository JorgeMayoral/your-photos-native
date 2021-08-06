import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = '@user_token'

export const getToken = async (): Promise<string | null> => {
  const token = await AsyncStorage.getItem(TOKEN_KEY);

  return token;
};

export const setToken = async (token: string): Promise<void> => {
  await AsyncStorage.setItem(TOKEN_KEY, token)
}

export const removeToken = (): void => {
  AsyncStorage.removeItem(TOKEN_KEY).then(() => {})
}