import React from "react";

import { ModalCardTitle, ModalCardHeader, Delete } from "bloomer";

export const FeedbackFormHeader = ({
	closeModal = () => {},
	darkmode = false,
}) => (
	<ModalCardHeader>
		<ModalCardTitle hasTextColor={darkmode ? "primary" : ""}>
			Опишіть свою знахідку
		</ModalCardTitle>
		<Delete onClick={closeModal} isSize="medium" />
	</ModalCardHeader>
);
