export class Http {
  static instance = new Http();

  get = async (url) => {
    try {

      let req = await fetch(url)
      let json = await req.json()

      return json;

    } catch (error) {
      console.error('http get method err', error)
      throw Error(err)
    }
  }
  
  post = async (url, body) => {
    try {

      let req = await fetch(url, {
        method: 'POST',
        body
      })
      let json = await req.json()
      return json;

    } catch (error) {
      console.error('http post method err', error)
      throw Error(err)
    }
  }
}