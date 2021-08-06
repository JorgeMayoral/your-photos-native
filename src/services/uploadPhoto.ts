import Constants from "expo-constants"
import * as FileSystem from 'expo-file-system'
import { getToken } from "../utils/tokenStorage"
import { getUser } from "../utils/userStorage"

const extra = Constants.manifest?.extra

export const uploadPhoto = async (description: string, photoFile: any): Promise<true | ErrorResponse> => {
  const url = `${extra?.apiUrl}/api/photo`
  const author = await getUser()

  const token = await getToken()

  if (author) {
    const response = await FileSystem.uploadAsync(url, photoFile, {headers: {'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}`}, httpMethod: 'POST', uploadType: FileSystem.FileSystemUploadType.MULTIPART, fieldName: 'photo', parameters: {description: description}})

    if (response.status === 201) {
      return true
    }

    return {error: 'Error uploading photo'}
  }

  return {error: 'Not logged in'}
}