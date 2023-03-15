import styled from "styled-components";

export const StyledFavoriteContainer = styled.div`
  width: 100px;
  height: 60px;
  position: relative;
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
    width: 45px;
    height: 45px;
  }
`
export const StyledText = styled.div`
  font-size: 26px;
  margin-top: 15px;
  margin-left: 90px;
  font-family: Bahnschrift;
  position: absolute;
  @media (min-width: 250px) and (max-width: 925px) {
    font-size: 22px;
    margin-left: 17px;
    margin-top: -5px;
  }
`
export const StyledImg = styled.img`
  width: 70px;
  height: 70px;
  margin-left: 50px;
  position: absolute;
  -webkit-filter: drop-shadow(5px 5px 5px #bbbbbb);
  filter: drop-shadow(5px 5px 5px #a2a2a2);
  @media (min-width: 250px) and (max-width: 925px) {
    margin-left: 0px;
    width: 45px;
    height: 45px;
  }
`
export const StyledLinkFavorite = styled.button`
  margin-top: 18px;
  font-size: 20px;
  border: none;
  background: none;
  color: white;
  font-family: Bahnschrift;
  position: absolute;
  @media (min-width: 250px) and (max-width: 925px) {
    margin-top: 12px;
    font-size: 14px;
  }
`