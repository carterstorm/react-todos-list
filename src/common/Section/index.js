import { StyledSection, StyledSectionContainer, StyledSectionHeading, StyledSectionBody } from "./styled";

const Section = ({title, header, body}) => (
    <StyledSection>
        <StyledSectionContainer>
          <StyledSectionHeading>
            {title}
          </StyledSectionHeading>
            {header}
        </StyledSectionContainer>
        <StyledSectionBody>
          {body}
        </StyledSectionBody>
      </StyledSection>
);

export {Section};