import "./index.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from "@mui/material";
// import { complianceMetrics } from "../../mocks/compliance.data";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ControlGroups } from "../../structures/ComplianceTracker/controls";
import { useContext, useEffect, useState } from "react";
import AccordionTable from "../../components/Table/AccordionTable";
import { VerifyWiseContext } from "../../../application/contexts/VerifyWise.context";
import { getAllEntities } from "../../../application/repository/entity.repository";
import { users } from "../../mocks/users/users.data"; // Importing users
import { roles } from "../../mocks/roles/roles.data";

const Table_Columns = [
  { id: 1, name: "Icon" },
  { id: 2, name: "Control Name" },
  { id: 3, name: "Owner" },
  { id: 4, name: "# of Subcontrols" },
  { id: 5, name: "Completion" },
];

const NewComplianceTracker = () => {
  const [expanded, setExpanded] = useState<number | false>(false);
  const { setDashboardValues } = useContext(VerifyWiseContext);
  const [metrics, setMetrics] = useState([]);

  const fetchComplianceTracker = async () => {
    try {
      const response = await getAllEntities({ routeUrl: "/controls" });
      console.log("Response:", response);
      setDashboardValues((prevValues: any) => ({
        ...prevValues,
        compliance: response.data,
      }));
    } catch (error) {
      console.error("Error fetching compliance tracker:", error);
    }
  };

  // Function to simulate the backend logic
  function simulateBackendLogic(userId: number) {
    try {
      // Find the user by ID
      const user = users.find((u) => u.id === userId);
      if (!user) {
        throw new Error(`User with ID ${userId} not found`);
      }

      // Find the role associated with the user
      const role = roles.find((r) => r.id === user.role_id);
      if (!role) {
        throw new Error(`Role with ID ${user.role_id} not found`);
      }

      console.log(`User: ${user.name}, Role: ${role.name}`);


      const userProjects = mockGetUserProjects(user.id);
      console.log(`User Projects: ${JSON.stringify(userProjects, null, 2)}`);

      return {
        user,
        role,
        projects: userProjects,
      };
    } catch (error: unknown) {
      console.error(
        "Error in simulateBackendLogic:",
        error instanceof Error ? error.message : error
      );
      return { error: error instanceof Error ? error.message : String(error) };
    }
  }

  // Mock function to simulate fetching user projects
  function mockGetUserProjects(userId: number) {
    const mockProjects = [
      { id: 101, userId: 1, name: "Project A" },
      { id: 102, userId: 2, name: "Project B" },
      { id: 103, userId: 3, name: "Project C" },
    ];
    return mockProjects.filter((project) => project.userId === userId);
  }

  // Run the simulation for a specific user ID
  const result = simulateBackendLogic(1); 
  console.log("Result:", result);

  const fetchMetrics = async () => {
    try {
      const userId = 1;
      const response = await getAllEntities({
        routeUrl: `/users/${userId}/calculate-progress`,
      });

      const data = response?.data || [];
      setMetrics(data);
      console.log("Metrics fetched:", response.data);
    } catch (error) {
      console.error("Error fetching metrics:", error);
    }
  };

  useEffect(() => {
    fetchMetrics();
    fetchComplianceTracker();
  }, []);

  const handleAccordionChange = (panel: number) => {
    return (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  };

  const renderAccordion = (
    controlGroupIndex: number,
    controlGroupTitle: string,
    controls: any
  ) => {
    return (
      <Stack className="new-compliance-tracker-details" key={controlGroupIndex}>
        <Accordion
          className="new-compliance-tracker-details-accordion"
          onChange={handleAccordionChange(controlGroupIndex)}
        >
          <AccordionSummary
            className="new-compliance-tracker-details-accordion-summary"
            expandIcon={
              <ExpandMoreIcon
                sx={{
                  transform:
                    expanded === controlGroupIndex
                      ? "rotate(180deg)"
                      : "rotate(270deg)",
                  transition: "transform 0.5s ease-in",
                }}
              />
            }
          >
            <Typography className="new-compliance-tracker-details-accordion-summary-title">
              {controlGroupIndex} {controlGroupTitle}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AccordionTable
              id={controlGroupIndex}
              cols={Table_Columns}
              rows={controls}
              controlCategory={controlGroupTitle}
            />
          </AccordionDetails>
        </Accordion>
      </Stack>
    );
  };

  return (
    <Stack className="new-compliance-tracker">
      <Typography className="new-compliance-tracker-title">
        Compliance Tracker
      </Typography>
      <Stack className="new-compliance-tracker-metrics">
        {metrics.map((metric, metricIndex) => (
          <Stack className="metric-card" key={metricIndex}>
            <Typography className="metric-card-name">{metric}</Typography>
            <Typography className="metric-card-amount">{metric}</Typography>
          </Stack>
        ))}
      </Stack>
      {ControlGroups.map((controlGroup) =>
        renderAccordion(
          controlGroup.id,
          controlGroup.controlGroupTitle,
          controlGroup.control.controls
        )
      )}
    </Stack>
  );
};

export default NewComplianceTracker;
