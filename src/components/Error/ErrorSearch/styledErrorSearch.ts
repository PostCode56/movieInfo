import styled from "styled-components";

export const StyledSection = styled.section`
  width: 100%;
  margin: 0 auto;
`
export const StyledContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`
export const StyledItem = styled.div`
  align-items: center;
`
export const StyledImg = styled.img`
  @media (min-width: 250px) and (max-width: 725px) {
    width: 380px;
    height: 380px;
  }
`
export const StyledTitle = styled.div`
  font-size: 28px;
  font-family: Bahnschrift;
  margin: 20px 0;
  color: gray;
  text-align: center;
  @media (min-width: 250px) and (max-width: 725px) {
    font-size: 22px;
  }
`
