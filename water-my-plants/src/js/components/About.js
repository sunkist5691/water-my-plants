import Caroline from "../../images/Caroline.jpeg";
import Erica from "../../images/Erica.jpeg";
import James from "../../images/James.jpeg";
import Joon from "../../images/Joon.jpeg";
import Christina from "../../images/Christina.jpeg";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  height: 90vh;
  justify-content: space-around;
  align-items: center;
  background-color: #8abaae;
`;

const StyledImgDiv = styled.div`
  width: 30%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #b8d5cd;
  border-radius: 5%;
  @media (max-width: 500px) {
    text-align: center;
    height: 30%;
  }
`;

const StyledImg = styled.img`
  width: 150px;
  height: auto;
  border-radius: 100%;
  margin-bottom: 3%;
  @media (max-width: 500px) {
    width: 80px;
    height: auto;
  }
`;

const StyledTitle = styled.h1`
  font-size: 2.5rem;
  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

export default function About() {
  return (
    <StyledDiv>
      <StyledImgDiv>
        <StyledTitle>Meet the Team:</StyledTitle>
      </StyledImgDiv>
      <StyledImgDiv>
        <h2>Erica</h2>
        <StyledImg src={Erica} alt="Erica" />
        <h3>Backend Engineer</h3>
      </StyledImgDiv>
      <StyledImgDiv>
        <h2>Joon</h2>
        <StyledImg src={Joon} alt="Erica" />
        <h3>Backend Engineer</h3>
      </StyledImgDiv>
      <StyledImgDiv>
        <h2>James</h2>
        <StyledImg src={James} alt="Erica" />
        <h3>Engineer</h3>
      </StyledImgDiv>
      <StyledImgDiv>
        <h2>Caroline</h2>
        <StyledImg src={Caroline} alt="Erica" />
        <h3>Engineer</h3>
      </StyledImgDiv>
      <StyledImgDiv>
        <h2>Christina</h2>
        <StyledImg src={Christina} alt="Erica" />
        <h3>Frontend Engineer</h3>
      </StyledImgDiv>{" "}
    </StyledDiv>
  );
}
