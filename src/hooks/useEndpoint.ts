import { useEffect, useState } from 'react'

export default (endpoint: string) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`profile/${endpoint}.json`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => err)
  }, [])

  return data
}
