/**
 * This file is currently in use
 */

import { Stack } from "@mui/material";
import VWProjectCard from "../components/Cards/ProjectCard";

const Playground = () => {
  return (
    <Stack
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "50px",
      }}
    >
      <VWProjectCard />
    </Stack>
  );
};

export default Playground;
