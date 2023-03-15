import styled from "styled-components";

export const StyledSection = styled.section`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 100px;
`
export const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: 250px) and (max-width: 925px) {
    width: 90%;
  }
`
export const StyledItemImg = styled.div`
  width: 28%;
  margin-top: 40px;
  text-align: left;
  -webkit-filter: drop-shadow(5px 5px 5px #000000);
  filter: drop-shadow(5px 5px 5px #000000);
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
  width: 50%;
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
  @media (min-width: 281px) and (max-width: 725px) {
    width: 280px;
    height: 380px;
  }
  @media (min-width: 0px) and (max-width: 280px) {
    width: 220px;
    height: 320px;
  }
`
export const StyledTitle = styled.div`
  font-size: 36px;
  font-weight: bold;
  font-family: Bahnschrift;
  border-bottom: 1px solid gray;
  -webkit-filter: drop-shadow(5px 5px 5px #9a9a9a);
  filter: drop-shadow(5px 5px 5px #9a9a9a);
`
export const StyledCountry = styled.div`
  font-size: 24px;
  font-family: Bahnschrift;
  margin: 10px 0;
  color: gray;
  @media (min-width: 250px) and (max-width: 725px) {
    font-size: 20px;
  }
`
export const StyledText = styled.div`
  font-size: 24px;
  font-family: Bahnschrift;
  margin: 20px 0;
  color: gray;
  @media (min-width: 250px) and (max-width: 725px) {
    font-size: 20px;
  }
`
export const StyledTextGenre = styled.div`
  font-size: 24px;
  font-family: Bahnschrift;
  margin: 10px 0;
  padding-right: 5px;
  text-transform: uppercase;
  @media (min-width: 250px) and (max-width: 725px) {
    font-size: 16px;
  }
`
export const StyledGenre = styled.div`
  width: 100%;
  display: flex;
`
export const StyledOverview = styled.div`
  font-size: 24px;
  font-family: Bahnschrift;
  flex-wrap: wrap;
  margin: 15px 0;
  @media (min-width: 250px) and (max-width: 725px) {
    font-size: 20px;
  }
`
export const StyledTagline = styled.div`
  font-size: 34px;
  font-family: Bahnschrift;
  margin: 30px 0;
  border-bottom: 1px solid gray;
`
export const StyledImgFavorite = styled.img`
  width: 70px;
  height: 90px;
  position: absolute;
  cursor: cell;
  -webkit-filter: drop-shadow(5px 5px 5px #ffffff);
  filter: drop-shadow(5px 5px 5px #ffffff);
  @media (min-width: 250px) and (max-width: 725px) {
    width: 50px;
    height: 70px;
  }
`