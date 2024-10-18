export const evidences = [
  {
    id: 1,
    subrequirement_id: 1,
    document_name: "Privacy Policy v2.1",
    document_type: "PDF",
    file_path: "/documents/privacy_policy_v2.1.pdf",
    upload_date: new Date("2024-06-05"),
    uploader_id: 1,
    description: "Updated privacy policy to comply with new consent regulations.",
    status: "Approved",
    last_reviewed: new Date("2024-09-01"),
    reviewer_id: 2,
    review_comments: "Policy aligns with current standards."
  },
  {
    id: 2,
    subrequirement_id: 2,
    document_name: "Consent Form Template",
    document_type: "DOCX",
    file_path: "/documents/consent_form_template.docx",
    upload_date: new Date("2024-10-01"),
    uploader_id: 3,
    description: "Template for collecting user consent.",
    status: "Pending",
    last_reviewed: new Date("2024-10-05"),
    reviewer_id: 4,
    review_comments: "Requires additional clarity on data usage."
  },
  {
    id: 3,
    subrequirement_id: 3,
    document_name: "Risk Assessment Report",
    document_type: "PDF",
    file_path: "/documents/risk_assessment_report.pdf",
    upload_date: new Date("2024-08-15"),
    uploader_id: 2,
    description: "Initial risk assessment for compliance with ISO 27001.",
    status: "Approved",
    last_reviewed: new Date("2024-09-10"),
    reviewer_id: 3,
    review_comments: "Well documented and thorough."
  },
  {
    id: 4,
    subrequirement_id: 4,
    document_name: "Data Encryption Protocols",
    document_type: "TXT",
    file_path: "/documents/data_encryption_protocols.txt",
    upload_date: new Date("2024-09-20"),
    uploader_id: 4,
    description: "Draft protocols for data encryption in transit.",
    status: "Under Review",
    last_reviewed: new Date("2024-09-30"),
    reviewer_id: 5,
    review_comments: "Needs more details on implementation."
  },
  {
    id: 5,
    subrequirement_id: 1,
    document_name: "User Consent Log",
    document_type: "CSV",
    file_path: "/documents/user_consent_log.csv",
    upload_date: new Date("2024-07-01"),
    uploader_id: 1,
    description: "Log of user consent status and timestamps.",
    status: "Approved",
    last_reviewed: new Date("2024-08-01"),
    reviewer_id: 2,
    review_comments: "Data is accurate and well-organized."
  }
];