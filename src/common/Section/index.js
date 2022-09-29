import { StyledSection, StyledSectionContainer, StyledSectionHeading, StyledSectionBody } from "./styled";

const Section = ({ title, header, body, exampleTaskButton }) => (
  <StyledSection>
    <StyledSectionContainer>
      <StyledSectionHeading>
        {title}
        {exampleTaskButton}
      </StyledSectionHeading>
      {header}
    </StyledSectionContainer>
    <StyledSectionBody>
      {body}
    </StyledSectionBody>
  </StyledSection>
);

export { Section };