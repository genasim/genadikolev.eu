import { Spinner } from 'react-bootstrap'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const FallbackSpinner = () => (
  <Container>
    <Spinner animation="grow" />
  </Container>
)

export default FallbackSpinner
