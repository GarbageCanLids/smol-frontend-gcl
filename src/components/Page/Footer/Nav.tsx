import React from 'react'
import styled from 'styled-components'

export const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink
        target="_blank"
        href="https://etherscan.io/token/0x2216e873ea4282ebef7a02ac5aea220be6391a7c#code"
      >
        smol contract
      </StyledLink>
      <StyledLink
        target="_blank"
        href="https://app.uniswap.org/#/swap?inuptCurrency=ETH&outputCurrency=0x2216e873ea4282ebef7a02ac5aea220be6391a7c&exactField=output&exactAmount=100"
      >
        uniswap smol-eth
      </StyledLink>
      <StyledLink target="_blank" href="https://discord.gg/AUq6fN4">
        discord
      </StyledLink>
      <StyledLink target="_blank" href="https://github.com/smolfinance">
        github
      </StyledLink>
      <StyledLink target="_blank" href="https://twitter.com/SmolFinance">
        twitter
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  
  color: ${(props) => props.theme.color.grey[400]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  text-shadow: 2px 2px 4px #000000;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
`
