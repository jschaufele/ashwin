import React from "react"
import { BaseLayout } from "../../containers/BaseLayout";
import { LandingPageBody } from "../../containers/components/LandingPageBody"

export const DashBoard = () => {
  return (<>
    <BaseLayout children={LandingPageBody} />
  </>)
};

export default DashBoard;
