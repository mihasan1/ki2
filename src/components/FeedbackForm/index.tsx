import React, { useState, useReducer } from "react";
import {
	Modal,
	ModalBackground,
	ModalCard,
	ModalCardBody,
	Button,
	Field,
	Label,
	Control,
	Input,
	TextArea,
	Radio,
	Help,
} from "bloomer";

import useDarkMode from "use-dark-mode";

import "./index.css";

import {
	setDescriptionCreators,
	setTitleCreators,
	setTypeCreators,
	setResponseStatusOKCreators,
	toggleIsLoadingCreators,
	resetCreators,
} from "./store/action";
import { initialState } from "./store/formData";
import { reducer } from "./store/reducer";

import { FeedbackFormHeader, FeedbackFormFooter } from "./components";
import { maxTitleLen, createIssue } from "./utils";

const FeedbackForm = () => {
	const [modalStatus, toggleModal] = useState(false);
	const darkmode = useDarkMode();

	const [
		{ title, description, errorStatus, type, isLoading, responseStatusOK },
		dispatch,
	] = useReducer(reducer, initialState);

	const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setTitleCreators(e.target.value));
	};

	const changeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		dispatch(setDescriptionCreators(e.target.value));
	};

	const changeType = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setTypeCreators(e.target.value));
	};

	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(toggleIsLoadingCreators(true));

		createIssue({
			title,
			description,
			type,
		})
			.then(response => dispatch(setResponseStatusOKCreators(response.ok)))
			.catch(() => dispatch(setResponseStatusOKCreators(false)))
			.finally(() => dispatch(toggleIsLoadingCreators(false)));
	};

	const openModal = () => toggleModal(true);
	const closeModal = () => {
		toggleModal(false);
		dispatch(resetCreators());
	};

	const currentLen = maxTitleLen - title.length;

	return (
		<>
			<Button onClick={openModal} isColor="warning" isInverted={darkmode.value}>
				Знайшли помилку?
			</Button>
			<Modal isActive={modalStatus} hasTextAlign="left">
				<ModalBackground />
				<ModalCard>
					<FeedbackFormHeader
						closeModal={closeModal}
						darkmode={darkmode.value}
					/>
					<ModalCardBody>
						<form onSubmit={submitHandler} id="feedback_form">
							<Field>
								<Label>Короткий опис проблеми</Label>
								<Control>
									<Input
										type="text"
										placeholder="Короткий опис знахідки"
										value={title}
										onChange={changeTitle}
										required
									/>
									<Help
										isColor={errorStatus ? "danger" : "success"}
										hasTextAlign="right"
									>
										{currentLen}/{maxTitleLen}
									</Help>
								</Control>
							</Field>
							<Field>
								<Label>Детальний опис...</Label>
								<Control>
									<TextArea
										placeholder={"Детальний опис..."}
										value={description}
										onChange={changeDescription}
										required
									/>
								</Control>
							</Field>
							{/*
								<Field>
									<Label>Зображення</Label>
									<Control>
										<input type="file" multiple />
									</Control>
								</Field>
							*/}
							<Field>
								<Control onChange={changeType}>
									<Radio name="req_type" value="bug" defaultChecked>
										{" "}
										Помилка{" "}
									</Radio>
									<Radio name="req_type" value="proposal">
										{" "}
										Побажання{" "}
									</Radio>
									<Radio name="req_type" value="feature">
										{" "}
										Ідея{" "}
									</Radio>
								</Control>
							</Field>
						</form>
					</ModalCardBody>
					<FeedbackFormFooter
						cancelHandler={closeModal}
						errorStatus={errorStatus}
						isLoading={isLoading}
						responseStatusOK={responseStatusOK}
						darkmode={darkmode.value}
					/>
				</ModalCard>
			</Modal>
		</>
	);
};

export default FeedbackForm;
