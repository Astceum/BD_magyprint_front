import img1 from "../imgemp/img/Foto.png"
import img2 from "../imgemp/img/Foto2.png"
import img3 from "../imgemp/img/Foto3.png"
import "../css/empresa.css"
import {PostEmpresa} from "./PostEmpresa";
import { usePosts } from "../context/CompanyContext";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



function Empresa() {
  const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_l6ty8ji', 'template_1z6hlit', form.current, 'VpPYtLe-wRA6N2mC6')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

  const { posts } = usePosts();

  
  
  return (
    <div id="empresa">
      <div id="info_empresas">
        <p>Descubre Magyprint, la tienda de productos personalizados más creativos y originales. <br />
        Fundada por Margarita, Magyprint ofrece una amplia gama de artículos únicos para tu empresa, <br />
         desde tazas, llaveros, bolsas, botellas, mug térmico, poleras personalizadas, hasta cuadernos y <br />
         lo que quisieras crear personalizado. Lo que hace destacar a Magyprint es la posibilidad de que los <br />
         clientes envíen sus propios diseños y fotos, creando regalos personalizados y únicos. <br /><br />
         Con una creciente reputación por su calidad, originalidad y responsabilidad, Magyprint se <br />
         ha convertido en la elección preferida para aquellos que buscan regalos especiales y con <br />
         significado. ¡Descubre el poder de la creatividad en cada regalo que das!
        </p>
      </div>

      <h2 id="titulo-productos"><b>PRODUCTOS EMPRESAS</b></h2>

      <div id="productos">
      <div id="container">

      <div className="flex flex-wrap items-center justify-center ">
        {posts.map((post) => (
          <PostEmpresa post={post} key={post._id} />
        ))}
      </div>
      </div>
      </div>

      
      <div className="grid-inferior-fluid">
        <div className="formulario">
          <h2>CUÉNTANOS TU PROYECTO</h2>
          <h5>Todos los campos marcados con un asterisco (*) son obligatorios</h5>
          <form id="projectForm" ref={form} onSubmit={sendEmail}>
            <div className="mb-3">
              <label for="nombre" className="form-label">Nombre<span className="text-danger">*</span></label>
              <input type="text" className="form-control rounded-4 " id="nombre" name="user_name" required />
            </div>


            <div className="mb-3">
              <label for="email" className="form-label">Email<span className="text-danger">*</span></label>
              <input type="email" className="form-control rounded-4" id="email" name="user_email" required />
            </div>


            <div className="mb-3">
              <label for="telefono" className="form-label">Número de Teléfono</label>
              <input type="tel" className="form-control rounded-4" id="telefono" name="telefono" />
            </div>

            <div className="mb-3">
              <label for="servicio" className="form-label">Servicio</label>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="Accesorios" id="opcion1"
                  name="servicio[]" />
                <label className="form-check-label" for="opcion1">Accesorios</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="Decoración" id="opcion2"
                  name="servicio[]" />
                <label className="form-check-label" for="opcion2">Decoración</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="Papeleria" id="opcion3"
                  name="servicio[]" />
                <label className="form-check-label" for="opcion3">Papelería</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="Recipientes" id="opcion4"
                  name="servicio[]" />
                <label className="form-check-label" for="opcion4">Recipientes</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="Vestimenta" id="opcion5"
                  name="servicio[]" />
                <label className="form-check-label" for="opcion5">Vestimenta</label>
              </div>
            </div> 

            <div className="mb-3">
              <label for="mensaje" className="form-label">Mensaje<span className="text-danger">*</span></label>
              <textarea className="form-control no-resize rounded-4" id="mensaje" name="message" rows="4"
                required></textarea>
            </div>
           
            <button type="submit" className="bg-[#3fa09b] hover:bg-[#177571] px-4 py-2 rounded mt-2 text-white focus:outline-none disabled:gb-indigo-400">Enviar</button>
          </form>
        </div>

        <div className="imagenes-emp">
          <div className="img_derecha">
            <img src={img1} className="imagen-lateral" />
            <img src={img2} className="imagen-lateral" />
            <img src={img3} className="imagen-lateral" />
          </div>
        </div>
      </div>
    </div>

  );
}

export default Empresa;