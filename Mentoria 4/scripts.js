console.log("Hola");

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const container = document.getElementById("container");

function escribirNombres() {
  console.log("Estoy dentro de Aceptar", nombre.value, apellido.value);
  container.innerHTML = `El Nombre es: ${nombre.value}  ${apellido.value} `;
  container.style.backgroundColor = "pink";
}

const EliminarNombres = () => {
  console.log("Estoy dentro de Eliminar");
  container.innerHTML = "estoy eliminando";
  container.style.backgroundColor = "blue";
  container.style.textAlign = "center";

  //creamos los elmentos
  let imagen = document.createElement("img");

  // conecto los atributos
  imagen.setAttribute(
    "src",
    "https://campusvirtual.com.co/wp-content/uploads/2023/10/LOGO-CAMPUS-VIRTUAL-1.png"
  );

  imagen.style.width = "100px";
  //le indico donde quiero que se vea , en este caso en el conectador
  container.appendChild(imagen);
};
