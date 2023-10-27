import {
  StyledSection,
  StyledSectionContainer,
  StyledSectionHeading,
  StyledSectionBody,
} from "./styled";

export const Section = ({ title, header, body, exampleTaskButton }) => (
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