import styled from "styled-components";

export const StyledSearch = styled.input`
  width: 50%;
  height: 30px;
  margin-top: 10px;
  margin-left: 20px;
  outline: none;
  font-family: Bahnschrift;
  border-radius: 15px;
  font-size: 20px;
  text-align: center;
  @media (min-width: 926px) and (max-width: 1250px) {
    height: 20px;
    margin-top: 15px;
    margin-left: 30px;
  }
  @media (min-width: 250px) and (max-width: 925px) {
    height: 20px;
    margin-top: 0px;
  }
`