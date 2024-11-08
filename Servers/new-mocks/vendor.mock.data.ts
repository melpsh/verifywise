/**
 * values for riskStatus: Active | Under review | Not active
 * values for riskLevel: Very high risk | High risk | Medium risk | Low risk | Very low risk
 */

export interface Vendor {
  id: number;
  projectId: number;
  vendorName: string;
  assignee: string;
  vendorProvides: string;
  website: string;
  vendorContactPerson: string;
  reviewResult: string;
  reviewStatus: string;
  reviewer: string;
  riskStatus: "Active" | "Under review" | "Not active";
  reviewDate: Date;
  riskDescription: string;
  impactDescription: string;
  impact: number;
  probability: number;
  actionOwner: string;
  actionPlan: string;
  riskSeverity: number;
  riskLevel:
    | "Very high risk"
    | "High risk"
    | "Medium risk"
    | "Low risk"
    | "Very low risk";
  likelihood: number;
}

export const vendors: Vendor[] = [
  {
    id: 1,
    projectId: 1,
    vendorName: "Vendor A",
    assignee: "John Doe",
    vendorProvides: "Consulting Services",
    website: "www.vendora.com",
    vendorContactPerson: "Jane Smith",
    reviewResult: "Positive",
    reviewStatus: "Completed",
    reviewer: "Bob Johnson",
    riskStatus: "Not active",
    reviewDate: new Date("2023-05-15"),
    riskDescription: "Limited experience with new technology",
    impactDescription: "Potential delays in project timeline",
    impact: 3,
    probability: 0.4,
    actionOwner: "Alice Williams",
    actionPlan: "Provide additional training",
    riskSeverity: 2,
    riskLevel: "Low risk",
    likelihood: 0.5,
  },
  {
    id: 2,
    projectId: 2,
    vendorName: "Vendor B",
    assignee: "Emily Clark",
    vendorProvides: "Software Development",
    website: "www.vendorb.com",
    vendorContactPerson: "Michael Brown",
    reviewResult: "Neutral",
    reviewStatus: "In Progress",
    reviewer: "Sarah Davis",
    riskStatus: "Under review",
    reviewDate: new Date("2023-06-20"),
    riskDescription: "High turnover rate",
    impactDescription: "Possible disruption in service",
    impact: 4,
    probability: 0.6,
    actionOwner: "David Wilson",
    actionPlan: "Implement retention strategies",
    riskSeverity: 3,
    riskLevel: "Medium risk",
    likelihood: 0.6,
  },
  {
    id: 3,
    projectId: 3,
    vendorName: "Vendor C",
    assignee: "James White",
    vendorProvides: "IT Support",
    website: "www.vendorc.com",
    vendorContactPerson: "Laura Green",
    reviewResult: "Negative",
    reviewStatus: "Pending",
    reviewer: "Chris Martin",
    riskStatus: "Active",
    reviewDate: new Date("2023-07-10"),
    riskDescription: "Lack of expertise in critical areas",
    impactDescription: "Significant impact on project quality",
    impact: 5,
    probability: 0.8,
    actionOwner: "Patricia Taylor",
    actionPlan: "Hire additional experts",
    riskSeverity: 4,
    riskLevel: "High risk",
    likelihood: 0.7,
  },
];
