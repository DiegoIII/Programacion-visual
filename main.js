const saludar = () => {
  alert("Hola, bienvenido a este cuatrimestre.");
};

const saludarNuevo = () => {
  Swal.fire({
    title: "Error!",
    text: "Do you want to continue",
    icon: "error",
    confirmButtonText: "Cool",
  });
};

const internet = () => {
  Swal.fire({
    title: "¿Aún tienes...?",
    text: "¿Aún tienes internet...?",
    icon: "question",
  });
};
