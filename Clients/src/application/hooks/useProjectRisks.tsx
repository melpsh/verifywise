/**
 * Custom hook to fetch and manage project risks data.
 *
 * @param {Object} params - The parameters object.
 * @param {number} [params.id] - The optional project ID to fetch specific project risks.
 * @returns {Object} - The hook returns an object containing:
 *   - `projectRisks` {ProjectRisk[]} - The list of project risks.
 *   - `loadingProjectRisks` {boolean} - The loading state of the project risks.
 *   - `error` {string | boolean} - The error state of the project risks request.
 *   - `projectRisksSummary` {Object} - The summary of project risks categorized by risk levels.
 */
import { useEffect, useState } from "react";
import { getEntityById } from "../repository/entity.repository";

export interface ProjectRisk {
  id: number;
  project_id: number;
  risk_name: string;
  risk_owner: string;
  ai_lifecycle_phase: string;
  risk_description: string;
  risk_category: string;
  impact: string;
  assessment_mapping: string;
  controls_mapping: string;
  likelihood: string;
  severity: string;
  risk_level_autocalculated: string;
  review_notes: string;
  mitigation_status: string;
  current_risk_level: string;
  deadline: string;
  mitigation_plan: string;
  implementation_strategy: string;
  mitigation_evidence_document: string;
  likelihood_mitigation: string;
  risk_severity: string;
  final_risk_level: string;
  risk_approval: string;
  approval_status: string;
  date_of_assessment: string;
}


const useProjectRisks = ({ id }: { id?: number }) => {
  const [projectRisks, setProjectRisks] = useState<ProjectRisk[]>([]);
  const [loadingProjectRisks, setLoadingProjectRisks] = useState<boolean>(true);
  const [error, setError] = useState<string | boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const routeUrl = id ? `/projectRisks/${id}` : '/projectRisks'

    const updateProjectRisks = async () => {
      setLoadingProjectRisks(true);
      try {
        const response = await  getEntityById({
          routeUrl,
          signal,
        })
        if(response.data) {
          setProjectRisks(Array.isArray(response.data) ? response.data : [response.data])
        }
      } catch (err) {
        if (err instanceof Error){
          setError(`Request failed: ${err.message}`)
        } else {
          setError(`Request failed`)
        }
      } finally {
        setLoadingProjectRisks(false)
      }
    }
    updateProjectRisks();
    return () => {
      controller.abort();
    };
  }, [id])

  const projectRisksSummary = projectRisks.reduce((acc, risk) => {
    const riskLevel = risk.current_risk_level.charAt(0).toLowerCase() + risk.current_risk_level.slice(1);
    const key = `${riskLevel.replace(/\s/g, '')}Risks` as keyof typeof acc;
    acc[key] = acc[key] + 1;

    return acc;
  }, {
    veryHighRisks: 0,
    highRisks: 0,
    mediumRisks: 0,
    lowRisks: 0,
    veryLowRisks: 0,
  });

  return {
    projectRisks,
    loadingProjectRisks,
    error,
    projectRisksSummary
  };
}

export default useProjectRisks;