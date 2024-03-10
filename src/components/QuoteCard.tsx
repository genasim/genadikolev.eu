import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

const Card = styled.div`
  width: 23rem;
  height: 30rem;
  ${media.lessThan('large')`
    display: none;
  `}
`

interface QuoteCardProps {
  quote?: string
}

const QuoteCard: React.FC<QuoteCardProps> = ({ quote }) => (
  <Card className="p-5 border border-light border-end-0 bg-transparent text-white">
    <div className="text-end position-relative h-100 d-flex flex-column justify-content-around">
      <h1>{quote}</h1>
      <h1 className="text-primary">_____</h1>
    </div>
  </Card>
)

export default QuoteCard
