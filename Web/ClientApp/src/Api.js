const URL = `https://localhost:44345/`
export default {
  post (path, body) {
    const request = new Request(URL + path, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: body
    })
    const promise = new Promise((resolve, reject) => {
      fetch(request)
        .then((response) => {
          if (response.status === 200 || response.status === 201) {
            response.json().then((data) => {
              resolve(data)
            })
          } else {
            response.json().then((error) => {
              reject(error)
            })
          }
        })
        .catch((erro) => {
          reject(erro)
        })
    })
    return promise
  },
  get (path) {
    const request = new Request(URL + path, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    const promise = new Promise((resolve, reject) => {
      fetch(request)
        .then((response) => {
          if (response.status === 200 || response.status === 304) {
            response.json().then(data => resolve(data)).catch(() => resolve([]))
          } else {
            response.json().then((error) => {
              reject(error)
            })
          }
        })
        .catch((erro) => {
          reject(erro)
        })
    })
    return promise
  },
  put (path, body) {
    const request = new Request(URL + path, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: body
    })
    const promise = new Promise((resolve, reject) => {
      fetch(request)
        .then((response) => {
          if (response.status === 200 || response.status === 201) {
            response.json().then((data) => {
              resolve(data)
            })
          } else {
            response.json().then((error) => {
              reject(error)
            })
          }
        })
        .catch((erro) => {
          reject(erro)
        })
    })
    return promise
  },
  delete (path) {
    const request = new Request(URL + path, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    const promise = new Promise((resolve, reject) => {
      fetch(request)
        .then((response) => {
          if (response.status === 200 || response.status === 204) {
            resolve(true)
          } else {
            response.json().then((error) => {
              reject(error)
            })
          }
        })
        .catch((erro) => {
          reject(erro)
        })
    })
    return promise
  }
}
