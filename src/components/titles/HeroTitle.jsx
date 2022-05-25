import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
font-size: 6rem;
color: ${({theme}) => theme.light};
font-weight: 900;
@media only screen and (max-width: 768px) {
font-size: 4rem;
}
`

const HeroTitle = ({children, ...rest}) => {
    return <Title {...rest}>{children}</Title>
    
}

export default HeroTitle
