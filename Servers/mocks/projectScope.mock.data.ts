import { ProjectScope } from "../models/projectScope.model";

export const projectScopes: ProjectScope[] = [
  {
    id: 1,
    assessmentId: 1,
    describeAiEnvironment:
      "This project involves the development of a new AI-powered virtual assistant.",
    isNewAiTechnology: true,
    usesPersonalData: true,
    projectScopeDocuments: "project-scope-v1.pdf",
    technologyType: "Natural Language Processing",
    hasOngoingMonitoring: true,
    unintendedOutcomes: "Potential bias in the assistant's responses.",
    technologyDocumentation: "technology-documentation.docx",
  },
  {
    id: 2,
    assessmentId: 2,
    describeAiEnvironment:
      "The project aims to automate the customer service process using machine learning algorithms.",
    isNewAiTechnology: false,
    usesPersonalData: true,
    projectScopeDocuments: "project-scope-v2.pdf",
    technologyType: "Computer Vision",
    hasOngoingMonitoring: true,
    unintendedOutcomes: "Privacy concerns due to the use of customer data.",
    technologyDocumentation: "technology-documentation-v2.docx",
  },
  // Additional project scope data...
];