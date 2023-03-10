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
export const StyledTitle = styled.div`
  text-align: center;
  font-size: 18px;
  font-family: Bahnschrift;
`