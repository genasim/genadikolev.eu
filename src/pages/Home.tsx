import styled from 'styled-components'
import useSetScreenImg from '../hooks/useSetScreenImg'
import Typewriter from 'typewriter-effect'
import useEndpoint from '../hooks/useEndpoint'
import media from 'styled-media-query'

const Container = styled.div`
  display: flex;
  flex-flow: column;
  row-gap: 5rem;

  ${media.lessThan('huge')`
    justify-content: center;
  `}
`

const Title = styled.h1`
  font-size: 10vh;
`

const Secondary = styled.h3`
  font-size: 5vh;
`

interface HomeModel {
  roles: string[]
}

const HomePage = () => {
  useSetScreenImg('images/backgrounds/home.png')
  const { data } = useEndpoint<HomeModel>('home')

  return (
    <Container>
      <div>
        <Title>
          <i>
            Genadi <br />
            Kolev
            <span className="text-primary">
              <b>.</b>
            </span>
          </i>
        </Title>
      </div>
      <div>
        <Secondary>
          I am{' '}
          <Typewriter
            options={{
              wrapperClassName: 'text-light',
              loop: true,
              autoStart: true,
              strings: data?.roles,
            }}
          ></Typewriter>
        </Secondary>
      </div>
    </Container>
  )
}

export default HomePage
