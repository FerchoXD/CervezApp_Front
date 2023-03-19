import Carousel from '../components/Carousel'
import '../styles/about.css';


function About() {

  return (
<>
	<main>
    <div className="about-container">
      <center><h1>Sobre nosotros</h1></center>
      <img src="images/ejemplo.png" alt="About Us" className="about-image" />
      <p>
      Bienvenidos a CervezApp, donde nuestra pasión por la cerveza artesanal nos ha llevado a crear 
      una tienda virtual en la que podrás encontrar una amplia variedad de cervezas de las mejores marcas y productores locales.

Nosotros somos un equipo de apasionados por la cerveza que ha recorrido diferentes partes del mundo en busca de los 
mejores sabores y técnicas de elaboración. Nuestro objetivo es brindarte una experiencia única al comprar cerveza, 
con una selección cuidadosamente curada y la información que necesitas para descubrir nuevas cervezas que se ajusten a tu gusto.
      Nos enorgullecemos de apoyar a los productores locales y de ofrecer una variedad de estilos de 
      cerveza que satisfagan a cualquier aficionado. Además, estamos siempre en busca de nuevas cervezas y colaboraciones 
      con productores emergentes para asegurarnos de que siempre encuentres algo emocionante y diferente en nuestra tienda.

Queremos que CervezApp sea tu destino para comprar cerveza en línea, así que si tienes alguna pregunta o comentario, 
no dudes en ponerte en contacto con nosotros. ¡Gracias por visitarnos y esperamos que disfrutes de tu experiencia en CervezApp!
      </p>
    </div>
    <div className="mission-container">
  <h2>Nuestra Misión</h2>
  <p>Somos una empresa comprometida con la calidad y la excelencia en la producción y distribución de cervezas artesanales. Nuestra misión es ofrecer a nuestros clientes una experiencia única, basada en la pasión y el conocimiento que tenemos sobre la cerveza. Queremos que cada cerveza que producimos sea una obra maestra, y que cada cliente que la pruebe tenga una experiencia inolvidable.</p>
</div>

<center><div className="values-container">
  <h2>Nuestros Valores</h2>
  <ul>
    <li><strong>Calidad:</strong> Nos esforzamos por producir las mejores cervezas posibles, utilizando los mejores ingredientes y técnicas de producción.</li>
    <li><strong>Pasión:</strong> Nos apasiona la cerveza, y queremos compartir esa pasión con nuestros clientes.</li>
    <li><strong>Sostenibilidad:</strong> Nos preocupamos por el medio ambiente, y nos esforzamos por ser una empresa sostenible y responsable.</li>
    <li><strong>Excelencia:</strong> Buscamos la excelencia en todo lo que hacemos, desde la producción de cerveza hasta el servicio al cliente.</li>
  </ul>
</div></center>
	</main>
  </>

  )
}

export default About
