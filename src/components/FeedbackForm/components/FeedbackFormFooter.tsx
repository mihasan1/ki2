import React from "react";

import { ModalCardFooter, Button, Help } from "bloomer";
import { ResponseStatusOK } from "./../store/types";

export interface FeedbackFormFooterProps {
	cancelHandler?: () => void;
	errorStatus?: boolean;
	isLoading?: boolean;
	responseStatusOK?: ResponseStatusOK;
	darkmode?: boolean;
}

export const FeedbackFormFooter: React.FC<FeedbackFormFooterProps> = ({
	cancelHandler = () => {},
	errorStatus = false,
	isLoading = false,
	responseStatusOK = null,
	darkmode = false,
}) => (
	<ModalCardFooter>
		<Button
			form="feedback_form"
			type="submit"
			isColor={errorStatus ? "danger" : "success"}
			isLoading={isLoading}
			disabled={errorStatus || isLoading}
			isOutlined={darkmode}
		>
			Відправити
		</Button>
		<Button isColor="warning" onClick={cancelHandler} isOutlined={darkmode}>
			Відмінити
		</Button>
		{responseStatusOK !== null &&
			(responseStatusOK ? (
				<Help isColor="success">Все успішно відправлено!</Help>
			) : (
				<Help isColor="danger">Щось пішло не так! Спробуйте знову.</Help>
			))}
	</ModalCardFooter>
);
