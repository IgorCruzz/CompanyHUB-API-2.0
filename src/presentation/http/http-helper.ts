export const Created = (data: any) => {
  return {
    status: 201,
    body: data,
  }
}

export const Ok = (data: any) => {
  return {
    status: 200,
    body: data,
  }
}

export const ServerError = (err: any) => {
  return {
    status: 500,
    body: err,
  }
}

export const BadRequest = (message: any) => {
  return {
    status: 400,
    body: { message: message },
  }
}

export const Unauthorized = (message: any) => {
  return {
    status: 401,
    body: { message: message },
  }
}
