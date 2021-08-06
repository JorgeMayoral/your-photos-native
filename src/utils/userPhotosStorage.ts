import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_PHOTOS_KEY = '@user_photos'

export const getUserPhotos = async (): Promise<Photo[] | false> => {
  const userPhotos = await AsyncStorage.getItem(USER_PHOTOS_KEY)
  return userPhotos && JSON.parse(userPhotos)
};

export const setUserPhotos = async (userPhotos: Photo[]): Promise<void> => {
  const stringifiedUser = JSON.stringify(userPhotos)
  await AsyncStorage.setItem(USER_PHOTOS_KEY, stringifiedUser)
}

export const removeUserPhotos = async (): Promise<void> => {
  await AsyncStorage.removeItem(USER_PHOTOS_KEY)
}