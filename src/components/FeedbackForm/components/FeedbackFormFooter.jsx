import React from "react";

import { ModalCardFooter, Button, Help } from "bloomer";

export const FeedbackFormFooter = ({
	sendHandler = () => {},
	cancelHandler = () => {},
	errorStatus = false,
	isLoading = false,
	responseStatusOK = null,
}) => (
	<ModalCardFooter>
		<Button
			form="feedback_form"
			type="submit"
			isColor={errorStatus ? "danger" : "success"}
			isLoading={isLoading}
			onClick={sendHandler}
			disabled={errorStatus || isLoading}
		>
			Відправити
		</Button>
		<Button isColor="warning" onClick={cancelHandler}>
			Охрана отмєна
		</Button>
		{responseStatusOK !== null &&
			(responseStatusOK ? (
				<Help isColor="success">Все успішно відправлено!</Help>
			) : (
				<Help isColor="danger">Щось пішло не так! Спробуйте знову.</Help>
			))}
	</ModalCardFooter>
);
