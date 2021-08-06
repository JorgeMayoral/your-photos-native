type Photo = {
  id: number,
  description: string,
  filename: string | null
  authorId: number,
  createdAt: string,
  updatedAt: string
}

type User = {
  id: number,
  username: string,
  email: string
}

type ErrorResponse = {
  error: string
}