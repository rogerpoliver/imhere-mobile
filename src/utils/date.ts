const today = new Date();
const day = today.getDate();
const month = today.toLocaleString('pt-BR', { month: 'long' });
const year = today.getFullYear();
export const date = `${day} de ${month} de ${year}`;

