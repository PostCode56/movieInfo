import styled from "styled-components";

export const StyledSection = styled.section`
  width: 100%;
  height: 100px;
  margin: 0 auto;
  background: black;
  color: white;
  @media (min-width: 250px) and (max-width: 925px) {
    height: 160px;
  }
`
export const StyledContainer = styled.div`
  width: 85%;
  margin: 0 auto;
`
export const StyledItems = styled.div`
  display: flex;
  @media (min-width: 250px) and (max-width: 925px) {
    flex-direction: column;
  }
`
export const StyledItemsContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin-top: 35px;
  @media (min-width: 250px) and (max-width: 925px) {
    width: 100%;
  }
`
export const StyledInputContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  margin-top: 35px;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  transition: all 0.5s ease;

  &:hover {
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -o-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }

  @media (min-width: 250px) and (max-width: 925px) {
    width: 100%;
  }

`
export const StyledLogo = styled.div`
  font-size: 28px;
  font-family: Bahnschrift;
  text-align: center;
  color: cornflowerblue;
  @media (min-width: 250px) and (max-width: 925px) {
    font-size: 22px;
  }
`
export const StyledLink = styled.button`
  font-size: 20px;
  border: none;
  background: none;
  color: white;
  font-family: Bahnschrift;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  transition: all 0.5s ease;

  &:hover {
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -o-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }

  @media (min-width: 250px) and (max-width: 925px) {
    font-size: 16px;
  }
`

