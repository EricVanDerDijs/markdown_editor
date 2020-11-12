import qs from 'query-string'

export const baseFetch = async (endpoint, options) => {
  let url = `http://localhost:1337${endpoint}`

  if (options && options.queryString !== undefined) {
    url += `?${qs.stringify(options.queryString)}`
    delete options.queryString
  }

  const finalOptions = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    ...options
  }

  try {
    const response = await fetch(url, finalOptions)

    if (!response.ok) {
      throw response
    }    
    return await response.json()
  } catch (errResponse) {
    let error = null
    if (typeof errResponse.json === 'function') {
      error = await errResponse.json()
    }
    throw error ? error : errResponse
  }
}