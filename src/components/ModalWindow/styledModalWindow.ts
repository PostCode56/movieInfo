import styled from "styled-components";

export const StyledSection = styled.section`
  width: 100%;
  height: 200px;
  font-family: Bahnschrift;
  position: sticky;
  position: -webkit-sticky;
  bottom: 0;
  display: flex;
  justify-content: right;
  @media (min-width: 250px) and (max-width: 725px) {
    height: 250px;
  }
`
export const StyledContainer = styled.div`
  width: 30%;
  background-color: rgba(1, 1, 1, 0.8);
  border-radius: 15px;
  -webkit-filter: drop-shadow(5px 5px 5px #000000);
  filter: drop-shadow(5px 5px 5px #000000);
  opacity: 0;
  animation: ani 0.75s forwards;
  @keyframes ani {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`
export const StyledItems = styled.div`
  width: 70%;
  margin: 40px auto;
  text-align: center;
`
export const StyledItemContainer = styled.div`
  width: 90%;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  @media (min-width: 250px) and (max-width: 725px) {
    flex-direction: column;
    width: 100%;
  }
`
export const StyledImg = styled.img`
  width: 100px;
  height: 140px;
  -webkit-filter: drop-shadow(5px 5px 5px #9a9a9a);
  filter: drop-shadow(5px 5px 5px #9a9a9a);
  @media (min-width: 250px) and (max-width: 725px) {
    width: 40px;
    height: 50px;
  }
`
export const StyledBlockItems = styled.div`
  width: 50%;
  @media (min-width: 250px) and (max-width: 725px) {
    width: 100%;
  }
`
export const StyledTitle = styled.div`
  color: rgb(255, 255, 255);
  font-size: 22px;
  padding-top: 10px;
  @media (min-width: 250px) and (max-width: 725px) {
    font-size: 10px;
  }
`
export const StyledText = styled.div`
  font-size: 22px;
  padding-top: 10px;
  @media (min-width: 250px) and (max-width: 725px) {
    font-size: 12px;
  }
`