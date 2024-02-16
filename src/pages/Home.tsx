import { useSetImageUrlContext } from "../Layout"

const HomePage = () => {
  useSetImageUrlContext('home')

  return (
    <>
      <h1>Home page</h1>
    </>
  )
}

export default HomePage
