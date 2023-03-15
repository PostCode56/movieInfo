import styled from "styled-components";

export const StyledSection = styled.section`
  margin: 0 auto;
  width: 100%;
`
export const StyledList = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
export const StyledCard = styled.div`
  width: 300px;
  margin-top: 30px;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  transition: all 0.5s ease;
  -webkit-filter: drop-shadow(5px 5px 5px #000000);
  filter: drop-shadow(5px 5px 5px #000000);
  &:hover {
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -o-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }
`
export const StyledImg = styled.img`
  width: 280px;
  height: 380px;
`
export const StyledTitleCard = styled.div`
  text-align: center;
  font-size: 18px;
  font-family: Bahnschrift;
  padding-top: 5px;
`
export const StyledTitle = styled.div`
  width: 25%;
  margin: 15px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  font-family: Bahnschrift;
  @media (min-width: 250px) and (max-width: 925px) {
    width: auto;
    font-size: 18px;
  }
`
export const StyledImgDelete = styled.img`
  width: 50px;
  height: 70px;
  position: absolute;
  cursor: pointer;
  -webkit-filter: drop-shadow(5px 5px 5px #ffffff);
  filter: drop-shadow(10px 10px 10px #ffffff);
`