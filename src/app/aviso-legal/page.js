import { pageMetadata } from "@/lib/metadata";
import { LegalPage, LegalSection, LegalSubtitle, LegalTable, ReviewedBy } from "@/components/Legal";

export const metadata = pageMetadata({
  title: "Aviso legal | Zoraida | Psicóloga en Granada",
  description: "Aviso legal del sitio web de Zoraida García, psicóloga colegiada en Granada. Datos de la titular, propiedad intelectual, responsabilidades y legislación aplicable.",
  path: "/aviso-legal/",
});

export default function AvisoLegalPage() {
  return (
    <LegalPage title="Aviso legal" updated="noviembre de 2026">

      <p>Zoraida Mercedes García Rodríguez se reserva el derecho de modificar cualquier tipo de información que pudiera aparecer en el sitio web, sin que exista obligación de preavisar o poner en conocimiento de los usuarios dichas modificaciones, entendiéndose como suficiente con la publicación en el sitio web de Zoraida Mercedes García Rodríguez.</p>
      <p style={{ marginBottom: '40px' }}>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico, a continuación se exponen los datos identificativos de la titular del dominio zoraidagarciapsicologagranada.com:</p>

      <LegalSection title="1. Datos identificativos">
        <LegalTable rows={[
          ["Nombre de dominio", "zoraidagarciapsicologagranada.com"],
          ["Nombre o denominación social", "Zoraida Mercedes García Rodríguez"],
          ["NIF", "75927675Y"],
          ["Domicilio", "C/ Félix Rodríguez de la Fuente, 27, Local 3 (Clínica VIDICO), 18006 Granada (España)"],
          ["Teléfono", "+34 692 64 22 52"],
          ["Correo electrónico", <a key="email" href="mailto:zoripsico@gmail.com">zoripsico@gmail.com</a>],
        ]} />

        {/* La LSSI (art. 10.1.f) pide estos datos a quien ejerce una profesión
            regulada. El texto de la consultora no los trae y ya estaban
            publicados, así que se conservan. Al ser profesional autónoma no
            hay inscripción en el Registro Mercantil. */}
        <LegalSubtitle>Datos profesionales</LegalSubtitle>
        <LegalTable rows={[
          ["Profesión", "Psicóloga General Sanitaria"],
          ["Colegio profesional", "Colegio Oficial de Psicología de Andalucía Oriental (COPAO)"],
          ["Nº de colegiada", "AO-12108"],
          ["Titulación", "Grado en Psicología (Universidad de Granada) y Máster en Psicología General Sanitaria (Universidad de Almería), títulos expedidos en España"],
          ["Registro sanitario (NICA)", "59834"],
          ["Normas profesionales", <span key="normas">Código Deontológico del Psicólogo, consultable en la web del <a href="https://www.copao.com" target="_blank" rel="noopener noreferrer">COPAO</a></span>],
        ]} />
      </LegalSection>

      <LegalSection title="2. Derechos de propiedad intelectual e industrial">
        <p>El sitio web, incluyendo a título enunciativo pero no limitativo su programación, edición, compilación y demás elementos necesarios para su funcionamiento, los diseños, logotipos, texto y/o gráficos, son propiedad del responsable o, si es el caso, dispone de licencia o autorización expresa por parte de los autores.</p>
        <p>Todos los contenidos del sitio web se encuentran debidamente protegidos por la normativa de propiedad intelectual e industrial, así como inscritos en los registros públicos correspondientes. Independientemente de la finalidad para la que fueran destinados, la reproducción total o parcial, uso, explotación, distribución y comercialización, requiere en todo caso de la autorización escrita previa por parte del responsable. Cualquier uso no autorizado previamente se considera un incumplimiento grave de los derechos de propiedad intelectual o industrial del autor. Los diseños, logotipos, texto y/o gráficos ajenos al responsable y que pudieran aparecer en el sitio web, pertenecen a sus respectivos propietarios, siendo ellos mismos responsables de cualquier posible controversia que pudiera suscitarse respecto a los mismos.</p>
        <p>El responsable reconoce a favor de sus titulares los correspondientes derechos de propiedad intelectual e industrial, no implicando su sola mención o aparición en el sitio web la existencia de derechos o responsabilidad alguna sobre los mismos, como tampoco respaldo, patrocinio o recomendación por parte del mismo.</p>
        <p>Para realizar cualquier tipo de observación respecto a posibles incumplimientos de los derechos de propiedad intelectual o industrial, así como sobre cualquiera de los contenidos del sitio web, puede hacerlo a través del correo electrónico <a href="mailto:zoripsico@gmail.com">zoripsico@gmail.com</a> o en la siguiente dirección postal: C/ Félix Rodríguez de la Fuente, 27, Local 3, 18006 Granada.</p>
      </LegalSection>

      <LegalSection title="3. Navegación, acceso y seguridad">
        <p>El acceso, navegación y utilización de esta página web implica por tu parte la aceptación expresa y sin reservas de todos los términos del presente Aviso legal, teniendo la misma validez y eficacia que cualquier contrato celebrado por escrito y firmado. En este sentido, se entenderá por Usuario a la persona que acceda, navegue, utilice o participe en los servicios y actividades, gratuitas u onerosas, desarrolladas en el Sitio Web.</p>
        <p>El acceso, navegación y utilización de este Sitio web supone la aceptación expresa y sin reservas de todas las advertencias legales, condiciones y términos de uso contenidos en el presente Aviso legal. Zoraida Mercedes García Rodríguez realiza los máximos esfuerzos para que la navegación se realice en las mejores condiciones y evitar los perjuicios de cualquier tipo que pudiesen ocasionarse durante la misma. Zoraida Mercedes García Rodríguez no se responsabiliza ni garantiza que el acceso a este Sitio web sea ininterrumpido o que esté libre de error. Tampoco se responsabiliza o garantiza que el contenido o software al que pueda accederse a través de este Sitio web esté libre de error o cause un daño. En ningún caso Zoraida Mercedes García Rodríguez será responsable por las pérdidas, daños o perjuicios de cualquier tipo que surjan por el acceso y el uso de la página Web, incluyéndose, pero no limitándose, a los ocasionados a los sistemas informáticos o los provocados por la introducción de virus, ni se hace responsable de los daños que pudiesen ocasionarse a los usuarios por un uso inadecuado de este Sitio web. Los servicios ofertados en este Sitio web sólo pueden ser utilizados correctamente si se cumplen las especificaciones técnicas para las que ha sido diseñado.</p>
        <p>Queda prohibido el acceso a este Sitio Web por parte de menores de 14 años, salvo que cuenten con la autorización previa y expresa de sus padres, tutores o representantes legales, los cuales serán considerados como responsables de los actos que lleven a cabo los menores a su cargo, conforme a la normativa vigente. En todo caso, se presumirá que el acceso realizado por un menor al Sitio Web se ha realizado con autorización previa y expresa de sus padres, tutores o representantes legales.</p>
      </LegalSection>

      <LegalSection title="4. Exención de responsabilidades del responsable">
        <p>El responsable se exime de cualquier tipo de responsabilidad derivada de la información publicada en su sitio web siempre que esta información haya sido manipulada o introducida por un tercero ajeno al mismo.</p>
        <p><strong>Política de enlaces.</strong> Desde el sitio web es posible que se redirija a contenidos de terceros sitios web. Dado que el responsable no puede controlar siempre los contenidos introducidos por los terceros en sus respectivos sitios web, no asume ningún tipo de responsabilidad respecto a dichos contenidos. En todo caso, procederá a la retirada inmediata de cualquier contenido que pudiera contravenir la legislación nacional o internacional, la moral o el orden público, procediendo a la retirada inmediata de la redirección a dicho sitio web, poniendo en conocimiento de las autoridades competentes el contenido en cuestión.</p>
        <p>El responsable no se hace responsable de la información y contenidos almacenados, a título enunciativo, pero no limitativo, en foros, chats, generadores de blogs, comentarios, redes sociales o cualquier otro medio que permita a terceros publicar contenidos de forma independiente en la página web del responsable. Sin embargo, y en cumplimiento de lo dispuesto en los artículos 11 y 16 de la LSSICE, se pone a disposición de todos los usuarios, autoridades y fuerzas de seguridad, colaborando de forma activa en la retirada o, en su caso, bloqueo de todos aquellos contenidos que puedan afectar o contravenir la legislación nacional o internacional, los derechos de terceros o la moral y el orden público.</p>
        <p>En caso de que el usuario considere que existe en el sitio web algún contenido que pudiera ser susceptible de esta clasificación, se ruega lo notifique de forma inmediata al administrador del sitio web. Este sitio web ha sido revisado y probado para que funcione correctamente. En principio, puede garantizarse el correcto funcionamiento durante los 365 días del año, 24 horas al día. Sin embargo, el responsable no descarta la posibilidad de que existan ciertos errores de programación, o que acontezcan causas de fuerza mayor, catástrofes naturales, huelgas o circunstancias semejantes que hagan imposible el acceso a la página web.</p>
      </LegalSection>

      <LegalSection title="5. Condiciones adicionales">
        <p>El usuario que introduce los datos es el responsable único y final de la veracidad de la información suministrada en el servicio y en las modificaciones de los mismos que pueda realizar hasta la finalización del mismo.</p>
      </LegalSection>

      <LegalSection title="6. Actualización y modificación de la información">
        <p>La información que aparece en este sitio web es la vigente en la fecha de su última actualización. Zoraida Mercedes García Rodríguez se reserva el derecho a actualizar, modificar o eliminar la información de este sitio web, pudiendo limitar o no permitir el acceso al mismo. No se podrá alterar, cambiar, modificar o adaptar este sitio web. Sin embargo, Zoraida Mercedes García Rodríguez se reserva la facultad de efectuar, en cualquier momento, cuantos cambios y modificaciones estime convenientes, pudiendo hacer uso de tal facultad en cualquier momento y sin previo aviso.</p>
      </LegalSection>

      <LegalSection title="7. Ley aplicable y jurisdicción">
        <p>Las presentes Condiciones se regirán e interpretarán de acuerdo con la legislación común española. Para cuantas cuestiones pudieran surgir sobre la interpretación, cumplimiento, rescisión o resolución de las Condiciones Generales, las Partes se someten a la jurisdicción y competencia de los Juzgados y Tribunales del domicilio social del Responsable del sitio web. No obstante lo anterior, de conformidad con la legislación española, para cuantas cuestiones pudieran surgir en relación con estas Condiciones Generales serán competentes los juzgados y tribunales del domicilio que resulte de aplicación, de conformidad con el artículo 52 de la Ley de Enjuiciamiento Civil o norma sustitutiva aplicable en cada momento.</p>
      </LegalSection>

      <ReviewedBy prefix="Aviso legal revisado" />
    </LegalPage>
  );
}
