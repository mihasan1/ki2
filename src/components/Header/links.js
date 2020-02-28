const generLink = (path, description) => ({ path, description });

export const links = [
	generLink("/", "Головна"),
	generLink("/history", "Історія"),
	generLink("/memo", "Пам'ятка абітурієнту"),
	generLink("/contacts", "Контакти")
];
