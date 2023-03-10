import styled from "styled-components";

export const StyledSection = styled.section`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 50px;
`
export const StyledContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
export const StyledItem = styled.div`
  width: 28%;
  margin-top: 40px;
  text-align: right;
  @media (min-width: 1251px) and (max-width: 2000px) {
    width: 35%
  }
  @media (min-width: 250px) and (max-width: 1250px) {
    width: 100%;
    flex-direction: column;
    text-align: center;
  }
`
export const StyledInfoItem = styled.div`
  width: 67%;
  margin-top: 40px;
  margin-left: 25px;
  text-align: left;
  @media (min-width: 1251px) and (max-width: 2000px) {
    width: 60%
  }
  @media (min-width: 250px) and (max-width: 925px) {
    width: 100%;
  }
`
export const StyledImg = styled.img`
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
    width: 280px;
    height: 380px;
  }
`
export const StyledTitle = styled.div`
  font-size: 42px;
  font-weight: bold;
  font-family: Bahnschrift;
  border-bottom: 1px solid gray;
`
export const StyledCountry = styled.div`
  font-size: 28px;
  font-family: Bahnschrift;
  margin: 10px 0;
  color: gray;
  @media (min-width: 250px) and (max-width: 725px) {
    font-size: 24px;
  }
`
export const StyledText = styled.div`
  font-size: 28px;
  font-family: Bahnschrift;
  margin: 20px 0;
  color: gray;
  @media (min-width: 250px) and (max-width: 725px) {
    font-size: 24px;
  }
`
export const StyledTextGenre = styled.div`
  font-size: 28px;
  font-family: Bahnschrift;
  margin: 10px 0;
  padding-right: 5px;
  text-transform: uppercase;
  @media (min-width: 250px) and (max-width: 725px) {
    font-size: 24px;
  }
`
export const StyledGenre = styled.div`
  width: 100%;
  display: flex;
`
export const StyledOverview = styled.div`
  font-size: 30px;
  font-family: Bahnschrift;
  flex-wrap: wrap;
  margin: 15px 0;
  @media (min-width: 250px) and (max-width: 725px) {
    font-size: 24px;
  }
`
export const StyledTagline = styled.div`
  font-size: 34px;
  font-family: Bahnschrift;
  margin: 30px 0;
  border-bottom: 1px solid gray;
`
