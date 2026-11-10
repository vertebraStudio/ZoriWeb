import { pageMetadata } from "@/lib/metadata";
import { LegalPage, LegalSection, LegalSubtitle, LegalDataTable, ReviewedBy } from "@/components/Legal";
import CookieSettingsButton from "@/components/CookieSettingsButton";

export const metadata = pageMetadata({
  title: "Política de cookies | Zoraida | Psicóloga en Granada",
  description: "Política de cookies del sitio web de Zoraida García, psicóloga en Granada: qué cookies se usan, para qué y cómo configurarlas o retirar el consentimiento.",
  path: "/politica-cookies/",
});

// Cookies reales de la web (noviembre de 2026). La propia es el registro del
// consentimiento en localStorage (src/lib/cookieConsent.js). Las de Google
// solo aparecen si se activa el mapa; nombres y duraciones según la política
// de Google: https://policies.google.com/technologies/cookies
// La web no tiene analítica, publicidad ni fuentes externas: si se añade algo
// de eso, hay que añadir aquí sus cookies y una categoría en el banner.
const COOKIES = [
  ["zori-cookie-consent", "Propia (almacenamiento local)", "12 meses", "Técnica. Guarda tu elección sobre las cookies para no volver a preguntarte en cada visita.", "Baja"],
  ["NID", "Google", "6 meses desde el último uso", "Solo si activas el mapa. Recuerda tus preferencias en los servicios de Google; Google también la usa con fines publicitarios.", "Media"],
  ["AEC", "Google", "6 meses", "Solo si activas el mapa. Seguridad: ayuda a Google a detectar spam, fraude y abusos.", "Baja"],
  ["SOCS", "Google", "13 meses", "Solo si activas el mapa. Guarda tus elecciones sobre las cookies de Google.", "Baja"],
  ["__Secure-ENID", "Google", "13 meses", "Solo si activas el mapa. Recuerda tus preferencias en los servicios de Google; Google también la usa con fines analíticos.", "Media"],
];

const BROWSERS = [
  ["Chrome", "https://support.google.com/chrome/answer/95647?hl=es"],
  ["Edge", "https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"],
  ["Firefox", "https://www.mozilla.org/es-ES/privacy/websites/#cookies"],
  ["Safari", "https://support.apple.com/es-es/guide/safari/sfri11471/mac"],
  ["Opera", "https://help.opera.com/en/latest/security-and-privacy/#clearBrowsingData"],
];

export default function CookiesPage() {
  return (
    <LegalPage title="Política de cookies" updated="noviembre de 2026">

      <p style={{ marginBottom: '40px' }}>Conforme con la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico (LSSI), en relación con el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos y Garantía de los Derechos Digitales (LOPDGDD), es obligado obtener el consentimiento expreso del usuario de todas las páginas web que usan cookies prescindibles, antes de que este navegue por ellas.</p>

      <LegalSection title="¿Qué son las cookies?">
        <p>Las cookies y otras tecnologías similares tales como local shared objects, flash cookies o píxeles, son herramientas empleadas por los servidores web para almacenar y recuperar información acerca de sus visitantes, así como para ofrecer un correcto funcionamiento del sitio.</p>
        <p>Mediante el uso de estos dispositivos se permite al servidor web recordar algunos datos concernientes al usuario, como sus preferencias para la visualización de las páginas de ese servidor, nombre y contraseña, productos que más le interesan, etc.</p>
      </LegalSection>

      <LegalSection title="Cookies afectadas por la normativa y cookies exceptuadas">
        <p>Según la directiva de la UE, las cookies que requieren el consentimiento informado por parte del usuario son las cookies de analítica y las de publicidad y afiliación, quedando exceptuadas las de carácter técnico y las necesarias para el funcionamiento del sitio web o la prestación de servicios expresamente solicitados por el usuario.</p>
      </LegalSection>

      <LegalSection title="Tipos de cookies">
        <LegalSubtitle>Según la finalidad</LegalSubtitle>
        <ul>
          <li><strong>Cookies técnicas y funcionales:</strong> son aquellas que permiten al usuario la navegación a través de una página web, plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existan.</li>
          <li><strong>Cookies analíticas:</strong> son aquellas que permiten al responsable de las mismas el seguimiento y análisis del comportamiento de los usuarios de los sitios web a los que están vinculadas. La información recogida mediante este tipo de cookies se utiliza en la medición de la actividad de los sitios web, aplicación o plataforma y para la elaboración de perfiles de navegación de los usuarios de dichos sitios, aplicaciones y plataformas, con el fin de introducir mejoras en función del análisis de los datos de uso que hacen los usuarios del servicio.</li>
          <li><strong>Cookies publicitarias:</strong> son aquellas que permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios que, en su caso, el editor haya incluido en una página web, aplicación o plataforma desde la que presta el servicio solicitado en base a criterios como el contenido editado o la frecuencia en la que se muestran los anuncios.</li>
          <li><strong>Cookies de publicidad comportamental:</strong> recogen información sobre las preferencias y elecciones personales del usuario (retargeting) para permitir la gestión, de la forma más eficaz posible, de los espacios publicitarios que, en su caso, el editor haya incluido en una página web, aplicación o plataforma desde la que presta el servicio solicitado.</li>
          <li><strong>Cookies sociales:</strong> son establecidas por las plataformas de redes sociales en los servicios para permitirle compartir contenido con sus amigos y redes. Las plataformas de medios sociales tienen la capacidad de rastrear su actividad en línea fuera de los Servicios. Esto puede afectar al contenido y los mensajes que ve en otros servicios que visita.</li>
          <li><strong>Cookies de afiliados:</strong> permiten hacer un seguimiento de las visitas procedentes de otras webs, con las que el sitio web establece un contrato de afiliación (empresas de afiliación).</li>
          <li><strong>Cookies de seguridad:</strong> almacenan información cifrada para evitar que los datos guardados en ellas sean vulnerables a ataques maliciosos de terceros.</li>
        </ul>

        <LegalSubtitle>Según la propiedad</LegalSubtitle>
        <ul>
          <li><strong>Cookies propias:</strong> son aquellas que se envían al equipo terminal del usuario desde un equipo o dominio gestionado por el propio editor y desde el que se presta el servicio solicitado por el usuario.</li>
          <li><strong>Cookies de terceros:</strong> son aquellas que se envían al equipo terminal del usuario desde un equipo o dominio que no es gestionado por el editor, sino por otra entidad que trata los datos obtenidos a través de las cookies.</li>
        </ul>

        <LegalSubtitle>Según el plazo de conservación</LegalSubtitle>
        <ul>
          <li><strong>Cookies de sesión:</strong> son un tipo de cookies diseñadas para recabar y almacenar datos mientras el usuario accede a una página web.</li>
          <li><strong>Cookies persistentes:</strong> son un tipo de cookies en el que los datos siguen almacenados en el terminal y pueden ser accedidos y tratados durante un período definido por el responsable de la cookie, y que puede ir de unos minutos a varios años.</li>
        </ul>
      </LegalSection>

      <LegalSection title="Tratamiento de datos personales">
        <p>Zoraida Mercedes García Rodríguez es la <strong>responsable del tratamiento</strong> de los datos personales del <strong>interesado</strong> y le informa de que estos datos serán tratados de conformidad con lo dispuesto en el Reglamento (UE) 2016/679, de 27 de abril de 2016 (RGPD), por lo que se le facilita la siguiente información del tratamiento:</p>
        <p><strong>Fines del tratamiento:</strong> según se especifica en el apartado de cookies que se utilizan en este sitio web.</p>
        <p><strong>Legitimación del tratamiento:</strong> salvo en los casos en los que resulte necesario para la navegación por la web, por consentimiento del interesado (art. 6.1.a RGPD).</p>
        <p><strong>Criterios de conservación de los datos:</strong> según se especifica en el apartado de cookies utilizadas en la web.</p>
        <p><strong>Comunicación de los datos:</strong> no se comunicarán los datos a terceros, excepto en cookies propiedad de terceros o por obligación legal.</p>
        <p><strong>Derechos que asisten al interesado:</strong></p>
        <ul>
          <li>Derecho a retirar el consentimiento en cualquier momento.</li>
          <li>Derecho de acceso, rectificación, portabilidad y supresión de sus datos, y de limitación u oposición a su tratamiento.</li>
          <li>Derecho a presentar una reclamación ante la Autoridad de control (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>) si considera que el tratamiento no se ajusta a la normativa vigente.</li>
        </ul>
        <p><strong>Datos de contacto para ejercer sus derechos:</strong> C/ Félix Rodríguez de la Fuente, 27, Local 3, 18006 Granada. Correo electrónico: <a href="mailto:zoripsico@gmail.com">zoripsico@gmail.com</a>.</p>
      </LegalSection>

      <LegalSection title="Cookies usadas en este sitio web">
        <p>Esta web no utiliza cookies de analítica ni de publicidad propias. La única cookie propia es técnica. Las cookies de terceros son de Google y solo se instalan si activas el mapa interactivo de la página de contacto:</p>
        <LegalDataTable
          head={["Cookie", "Titular", "Duración", "Propósito", "Intrusión"]}
          rows={COOKIES}
        />
        <p>Las cookies de Google las instala y gestiona Google, que decide en cada momento cuáles utiliza; la tabla recoge las que describe en su <a href="https://policies.google.com/technologies/cookies?hl=es" target="_blank" rel="noopener noreferrer">política de cookies</a>. Si tienes la sesión iniciada en tu cuenta de Google, Google puede utilizar también las cookies de tu cuenta.</p>
      </LegalSection>

      <LegalSection title="Panel de configuración de cookies">
        <p>Desde este panel podrá configurar las cookies que el sitio web puede instalar en su navegador, excepto las cookies técnicas o funcionales, que son necesarias para la navegación y la utilización de las diferentes opciones o servicios que se ofrecen.</p>
        <p>También puede abrirlo en cualquier momento desde «Configurar cookies», en el pie de todas las páginas, para cambiar o retirar su consentimiento.</p>
        <CookieSettingsButton className="btn">Panel de cookies</CookieSettingsButton>
      </LegalSection>

      <LegalSection title="Cómo gestionar las cookies desde el navegador">
        <LegalDataTable
          head={["Opción", "Cómo funciona"]}
          rows={[
            ["Eliminar las cookies del dispositivo", "Las cookies que ya están en un dispositivo se pueden eliminar borrando el historial del navegador, con lo que se suprimen las cookies de todos los sitios web visitados. Sin embargo, también se puede perder parte de la información guardada (por ejemplo, los datos de inicio de sesión o las preferencias de sitio web)."],
            ["Gestionar las cookies específicas del sitio", "Para tener un control más preciso de las cookies específicas de cada sitio, los usuarios pueden ajustar su configuración de privacidad y cookies en el navegador."],
            ["Bloquear las cookies", "Aunque la mayoría de los navegadores modernos se pueden configurar para evitar que se instalen cookies en los dispositivos, eso puede obligar al ajuste manual de determinadas preferencias cada vez que se visite un sitio o página. Además, algunos servicios y características pueden no funcionar correctamente (por ejemplo, los inicios de sesión con perfil)."],
          ]}
        />
      </LegalSection>

      <LegalSection title="Cómo eliminar las cookies de los navegadores más comunes">
        <ul>
          {BROWSERS.map(([name, url]) => (
            <li key={name}><a href={url} target="_blank" rel="noopener noreferrer">{name}</a></li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection title="Qué ocurre si se deshabilitan las cookies">
        <p>Algunas funcionalidades de los Servicios quedarán deshabilitadas. En esta web, si no aceptas las cookies de Google Maps, el mapa de la página de contacto no se mostrará; la dirección de la consulta seguirá visible.</p>
      </LegalSection>

      <LegalSection title="Actualización de nuestra política de cookies">
        <p>Es posible que actualicemos la Política de Cookies de nuestro Sitio web, por ello le recomendamos revisar esta política cada vez que acceda al mismo con el objetivo de estar adecuadamente informado sobre cómo y para qué usamos las cookies.</p>
      </LegalSection>

      <ReviewedBy prefix="Política de cookies revisada" />
    </LegalPage>
  );
}
