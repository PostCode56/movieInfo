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
  width: 85%;
  margin: 0 auto;
`
export const StyledItems = styled.div`
  display: flex;
  justify-content: space-between;
`
export const StyledItemsContainer = styled.div`
  width: 33%;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  @media (min-width: 250px) and (max-width: 925px) {
    margin-top: 40px;
  }
`
export const StyledBackContainer = styled.div`
  display: flex;
  cursor: pointer;
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
`
export const StyledItemsContainerLogo = styled.div`
  width: 33%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  @media (min-width: 250px) and (max-width: 925px) {
    margin-top: 40px;
  }
`
export const StyledFavoriteContainer = styled.div`
  width: 33%;
  margin-top: 30px;
  display: flex;
  justify-content: right;
  @media (min-width: 250px) and (max-width: 925px) {
    margin-top: 40px;
  }
`
export const StyledImg = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 10px;
  @media (min-width: 250px) and (max-width: 925px) {
    width: 40px;
    height: 40px;
  }
`
export const StyledText = styled.div`
  font-size: 28px;
  margin-top: 20px;
  font-family: Bahnschrift;
  color: white;
  @media (min-width: 281px) and (max-width: 925px) {
    width: auto;
    font-size: 18px;
    margin-top: 22px;
  }
  @media (min-width: 0px) and (max-width: 280px) {
    width: auto;
    font-size: 14px;
    margin-top: 20px;
  }
`
export const StyledLogo = styled.div`
  font-size: 28px;
  margin-top: 20px;
  font-family: Bahnschrift;
  color: cornflowerblue;
  -webkit-filter: drop-shadow(5px 5px 5px #004ff3);
  filter: drop-shadow(5px 5px 5px #004ff3);
  @media (min-width: 281px) and (max-width: 925px) {
    width: auto;
    font-size: 20px;
    margin-top: 20px;
    margin-left: 20px;
  }
  @media (min-width: 0px) and (max-width: 280px) {
    width: auto;
    font-size: 14px;
    margin-top: 20px;
    margin-left: 20px;
  }
`
