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

import {
	setTitle,
	setDescription,
	setType,
	toggleIsLoading,
	setResponseStatusOK,
	reset,
} from "./store/action";
import { initialState } from "./store/formData";
import { reducer } from "./store/reducer";

import { FeedbackFormHeader, FeedbackFormFooter } from "./components";
import { maxTitleLen, createIssue } from "./utils";

const FeedbackForm = () => {
	const [modalStatus, toggleModal] = useState(false);

	const [
		{ title, description, errorStatus, type, isLoading, responseStatusOK },
		dispatch,
	] = useReducer(reducer, initialState);

	const changeTitle = e => {
		dispatch({ type: setTitle, payload: e.target.value });
	};

	const changeDescription = e => {
		dispatch({ type: setDescription, payload: e.target.value });
	};

	const changeType = e => {
		dispatch({ type: setType, payload: e.target.value });
	};

	const submitHandler = e => {
		e.preventDefault();
		dispatch({
			type: toggleIsLoading,
			payload: true,
		});

		createIssue({
			title,
			description,
			type,
		})
			.then(response => {
				dispatch({
					type: setResponseStatusOK,
					payload: response.ok,
				});
			})
			.catch(_ =>
				dispatch({
					type: setResponseStatusOK,
					payload: false,
				}),
			)
			.finally(_ =>
				dispatch({
					type: toggleIsLoading,
					payload: false,
				}),
			);
	};

	const openModal = () => toggleModal(true);
	const closeModal = () => {
		toggleModal(false);
		dispatch({
			type: reset,
		});
	};

	const currentLen = maxTitleLen - title.length;

	return (
		<>
			<Button onClick={openModal}>Знайшли помилку?</Button>
			<Modal isActive={modalStatus} style={{ textAlign: "left" }}>
				<ModalBackground />
				<ModalCard>
					<FeedbackFormHeader closeModal={closeModal} />
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
					/>
				</ModalCard>
			</Modal>
		</>
	);
};

export default FeedbackForm;
