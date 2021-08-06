import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"
import { fetchUserPhotos } from "../services/fetchUserPhotos"
import { getUserPhotos, removeUserPhotos } from "../utils/userPhotosStorage"

export const useUserPhotos = () => {
  const [loading, setLoading] = useState(true)
  const [userPhotos, setUserPhotos] = useState<Photo[]>([])

  const fetchApi = async () => {
    setLoading(true);
    const data = await fetchUserPhotos();

    await removeUserPhotos()
    await setUserPhotos(data);

    setUserPhotos(data);
    setLoading(false);
  };

  const readStorage = async () => {
    setLoading(true);
    const value = await getUserPhotos();
    if (value) {
      setUserPhotos(value);
      setLoading(false);
    } else {
      fetchApi();
    }
  };

  useEffect(() => {
    readStorage()
  }, [])

  return {loading, userPhotos, reload: fetchApi}
}