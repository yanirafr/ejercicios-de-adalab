const users = [
  { name: "María", isPremium: false },
  { name: "Lucía", isPremium: true },
  { name: "Susana", isPremium: true },
  { name: "Rocío", isPremium: false },
  { name: "Inmaculada", isPremium: false },
];

const saluteUsers = users.map((users) => {
  if (users.isPremium === false) {
    return `Hola ${users.name}.`;
  } else {
    return `Hola ${users.name}. Gracias por confiar en nosotros.`;
  }
});

console.log(saluteUsers);
