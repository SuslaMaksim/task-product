import styled from 'styled-components'
import {Row,Button} from 'react-bootstrap'


export const RowContainer = styled(Row)`
  @media (max-width: 992px) {
    justify-content: center;
  }
`

export const ImgContainer = styled.div`
  padding: 10px;
  display: flex;
  margin: 0 auto;
  max-width: 280px;
  height: 300px;
  overflow: hidden;
  @media (max-width: 1100px) {
    height: 280px;
  }
  `

  export const StyledButton = styled.div`
  margin-top: 20px

`