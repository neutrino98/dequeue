interface Response {
  success: boolean,
  message: string | undefined
  data: any
}

export const successRes = (data: object, message?: string): Response => ({
  success: true, data, message
})

export const failRes = (message: string): Response => ({
  success: false, message, data: undefined
})

export const serverErrRes = (): Response => ({
  success: false, message: 'Internal server error', data: undefined
})
