import { useEffect, useState } from 'react'

export default <T>(endpoint: string) => {
  const [data, setData] = useState<T | null>(null)

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
