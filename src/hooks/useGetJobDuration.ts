export const useGetJobDuration = () => {
	const fechaInicio = new Date('2023-02-01').getTime();
	const fechaFin = new Date().getTime();

	const diff = fechaFin - fechaInicio;

	const actualJobDuration = Math.ceil(diff / (1000 * 60 * 60 * 24 * 30));

	return actualJobDuration;
};
