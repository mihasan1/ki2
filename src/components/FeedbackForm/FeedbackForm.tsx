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
	setDescription,
	setTitle,
	setType,
	setResponseStatusOK,
	toggleIsLoading,
	reset,
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
		dispatch(setTitle(e.target.value));
	};

	const changeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		dispatch(setDescription(e.target.value));
	};

	const changeType = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setType(e.target.value));
	};

	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(toggleIsLoading(true));

		if (!!title.trim() && !!description.trim()) {
			createIssue({
				title,
				description,
				type,
			})
				.then(response => dispatch(setResponseStatusOK(response.ok)))
				.catch(() => dispatch(setResponseStatusOK(false)))
				.finally(() => dispatch(toggleIsLoading(false)));
		} else {
			alert("Check your data");
		}
	};

	const openModal = () => toggleModal(true);
	const closeModal = () => {
		toggleModal(false);
		dispatch(reset());
	};

	const currentLen = maxTitleLen - title.length;

	return (
		<>
			<Button onClick={openModal} isColor="warning" isInverted={darkmode.value}>
				Знайшли помилку?
			</Button>
			<Modal isActive={modalStatus} hasTextAlign="left">
				<ModalBackground onClick={closeModal} />
				<ModalCard>
					<FeedbackFormHeader
						closeModal={closeModal}
						darkmode={darkmode.value}
					/>
					<ModalCardBody>
						<form onSubmit={submitHandler} id="feedback_form">
							<fieldset disabled={isLoading}>
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
							</fieldset>
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
