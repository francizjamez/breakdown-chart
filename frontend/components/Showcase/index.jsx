import { Box, Text } from "@airtable/blocks/ui";
import React from "react";
import License from "../License";
import Sample from "./Sample";

const Showcase = () => {
  return (
    <Box display="flex" flexDirection="column">
      <License />
      <Text marginY={3} size="xlarge" fontWeight={600} textAlign="center">
        Sample Breakdown chart
      </Text>
      <Sample />
    </Box>
  );
};

export default Showcase;
