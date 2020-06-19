import React from "react";

import { ModalCardTitle, ModalCardHeader, Delete } from "bloomer";

export const FeedbackFormHeader = ({ closeModal = () => {} }) => (
	<ModalCardHeader>
		<ModalCardTitle>Опишіть свою знахідку</ModalCardTitle>
		<Delete onClick={closeModal} />
	</ModalCardHeader>
);
