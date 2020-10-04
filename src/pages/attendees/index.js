import React, { useState, useEffect } from "react";
import { userVar, langVar, apolloClientVar, tempVar } from "../../apollo/cachevars";
import { BaseLayout } from "../../containers/BaseLayout";
import { MeetingBody } from "../../containers/components/MeetingBody";

export const AttendeesPage = () => {
	return (
		<>
			<BaseLayout children={MeetingBody} />
		</>
	);
};

export default AttendeesPage;
