import styled from "styled-components";

export const StyledSection = styled.section`
  width: 100%;
  height: 130px;
  margin: 0 auto;
  background: black;
  color: white;
  @media (min-width: 250px) and (max-width: 925px) {
    height: 160px;
  }
`
export const StyledContainer = styled.div`
  width: 90%;
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
  padding-left: 20px;
  display: flex;
  justify-content: space-between;
  margin-top: 35px;
  @media (min-width: 250px) and (max-width: 925px) {
    width: 100%;
    margin: 0 auto;
    padding-left: 0px;
  }
`
export const StyledInputContainer = styled.div`
  width: 40%;
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
    margin: 10px auto;
  }
`
export const StyledLogo = styled.div`
  width: 15%;
  font-size: 28px;
  margin-top: 48px;
  font-family: Bahnschrift;
  text-align: center;
  color: cornflowerblue;
  -webkit-filter: drop-shadow(5px 5px 5px #004ff3);
  filter: drop-shadow(5px 5px 5px #004ff3);
  @media (min-width: 250px) and (max-width: 925px) {
    width: auto;
    font-size: 22px;
    margin-top: 20px;
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
    font-size: 14px;
  }
`

