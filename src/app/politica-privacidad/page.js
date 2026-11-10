import { pageMetadata } from "@/lib/metadata";
import { LegalPage, LegalSection, LegalSubtitle, LegalTable, ReviewedBy } from "@/components/Legal";

export const metadata = pageMetadata({
  title: "Política de privacidad | Zoraida | Psicóloga en Granada",
  description: "Política de privacidad y protección de datos del sitio web de Zoraida García, psicóloga en Granada: responsable, finalidades, conservación, destinatarios y derechos.",
  path: "/politica-privacidad/",
});

export default function PrivacidadPage() {
  return (
    <LegalPage title="Política de privacidad y protección de datos" updated="noviembre de 2026">

      <LegalSection title="1. Recogida, tratamiento y uso de los datos personales en la web">
        <p>En base a lo dispuesto en el Reglamento General de Protección de Datos 2016/679 (RGPD) y en la Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), le informamos que para hacer uso de algunos de los servicios que le ofrece nuestra web puede ser necesario que nos suministre determinados datos de carácter personal, que serán incorporados a ficheros automatizados.</p>
        <p>Cumpliendo con las disposiciones del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, y de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales, relativas a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos y por el que se deroga la Directiva 95/46/CE, le informamos que la responsable del tratamiento de los datos es:</p>
        <LegalTable rows={[
          ["Nombre o denominación social", "Zoraida Mercedes García Rodríguez"],
          ["NIF", "75927675Y"],
          ["Domicilio principal", "C/ Félix Rodríguez de la Fuente, 27, Local 3 (Clínica VIDICO), 18006 Granada"],
          ["Correo electrónico", <a key="email" href="mailto:zoripsico@gmail.com">zoripsico@gmail.com</a>],
          ["Teléfono de contacto", "+34 692 64 22 52"],
          ["Página web", "zoraidagarciapsicologagranada.com"],
        ]} />
        <p>Para realizar cualquier tipo de observación respecto a posibles incumplimientos de los derechos de propiedad intelectual o industrial, así como sobre cualquiera de los contenidos del sitio web, puede hacerlo poniéndose en contacto con la responsable a través de cualquiera de los medios indicados anteriormente.</p>
        <p>Los contenidos del Sitio Web tienen como finalidad informar a los usuarios de los servicios ofrecidos por la responsable como consecuencia de las solicitudes, gestiones o trámites que el Usuario realice mediante la web. Los datos objeto de tratamiento serán aquellos que nos facilite a través de los canales de contacto que figuran en la página (WhatsApp, teléfono y correo electrónico), así como aquellos otros que se generen durante el mantenimiento de la relación correspondiente. Este sitio web no dispone de formularios.</p>
        <p><strong>Solicitantes de información:</strong> los datos personales utilizados en estos casos proceden del propio interesado, el cual los proporciona a Zoraida Mercedes García Rodríguez al escribir por WhatsApp, al efectuar una llamada telefónica o al enviar un correo electrónico.</p>
        <p>Estos datos se utilizan con la finalidad de resolver las consultas y proporcionar información a aquellos que lo demanden o lo autoricen expresamente, principalmente por medio del correo electrónico.</p>
        <p>La persona que acceda a este Sitio Web (en adelante, el Usuario) asegura que tiene la edad mínima legal establecida por el Reglamento General de Protección de Datos 679/2016 (14 años) o por la normativa nacional que le sea de aplicación para otorgar el consentimiento en relación con los Servicios de la Sociedad de la Información.</p>
        <p>Mediante el acceso a este Sitio Web, el Usuario acepta expresamente todas las cláusulas de su información legal, de esta política de privacidad y de su política de cookies, así como de todas aquellas condiciones particulares recogidas para la utilización de determinados servicios. En caso de no aceptar alguna de las citadas cláusulas, el Usuario deberá abstenerse de acceder a este Sitio Web.</p>
        <p>Al acceder el Usuario a las cuentas de Zoraida Mercedes García Rodríguez en las redes sociales, acepta el tratamiento de sus datos personales por parte de las mismas según sus políticas de privacidad.</p>
      </LegalSection>

      <LegalSection title="2. Finalidad del tratamiento de los datos personales y legitimación">
        <LegalSubtitle>2.1. ¿Con qué finalidad trataremos tus datos personales?</LegalSubtitle>
        <p>Zoraida Mercedes García Rodríguez tratará los datos personales recabados a través de los canales de contacto del Sitio Web con las siguientes finalidades:</p>
        {/* El documento de la consultora deja este apartado sin rellenar
            ("FALTAN DATOS": su herramienta lo genera a partir de los
            formularios y esta web no tiene). Mientras no lo completen, se
            mantienen las finalidades que ya estaban publicadas. */}
        <ul>
          <li><strong>Gestión de consultas y solicitudes de cita.</strong> Legitimación: consentimiento del interesado, que se manifiesta al contactar por su propia iniciativa (art. 6.1.a RGPD).</li>
          <li><strong>Comunicación con el usuario</strong> para responder a sus mensajes y resolver dudas. Legitimación: aplicación de medidas precontractuales o interés legítimo (art. 6.1.b y 6.1.f RGPD).</li>
          <li><strong>Prestación de asistencia sanitaria (terapia psicológica)</strong>, si se inicia una relación terapéutica. Legitimación: ejecución del contrato de prestación de servicios (art. 6.1.b RGPD) y, para los datos de salud, la prestación de asistencia sanitaria bajo la responsabilidad de una profesional sujeta al secreto profesional (art. 9.2.h RGPD, en relación con la Ley 41/2002, de autonomía del paciente).</li>
        </ul>
        <p>Asimismo, te recordamos que puedes oponerte al envío de comunicaciones comerciales por cualquier vía y en cualquier momento, dirigiéndote a Zoraida Mercedes García Rodríguez.</p>

        <LegalSubtitle>2.2. ¿Por cuánto tiempo se conservan los datos personales recabados?</LegalSubtitle>
        <p>Los datos personales proporcionados se conservarán mientras se gestiona su comunicación y/o no solicites su supresión, y durante el tiempo mínimo necesario para cumplir con las obligaciones legales o mientras pudieran derivarse responsabilidades legales por los servicios prestados.</p>
      </LegalSection>

      <LegalSection title="3. Garantía">
        <p>El Usuario garantiza que los datos aportados son verdaderos, exactos, completos y actualizados, siendo responsable de cualquier daño o perjuicio, directo o indirecto, que pudiera ocasionarse como consecuencia del incumplimiento de tal obligación. En el caso de que los datos aportados pertenecieran a un tercero, el Usuario garantiza que ha informado a dicho tercero y obtenido su autorización para facilitar sus datos personales a Zoraida Mercedes García Rodríguez.</p>
      </LegalSection>

      <LegalSection title="4. Conservación de los datos">
        <p>Sus datos se conservarán mientras se mantenga la relación contractual o durante los años necesarios para cumplir con las obligaciones legales, mientras no solicite su cese o durante el tiempo necesario para la realización de los fines para los que fueron recabados.</p>
      </LegalSection>

      <LegalSection title="5. Destinatarios">
        <p>Sus datos serán conservados bajo estrictas medidas de seguridad que garanticen la confidencialidad y la seguridad de los mismos. Del mismo modo, sólo serán cedidos a las entidades y para las finalidades siguientes:</p>
        <ul>
          <li>Entidades y proveedores que prestan servicios a Zoraida Mercedes García Rodríguez para la correcta realización de estos servicios. Dichas entidades y proveedores se encuentran debidamente acreditados y firman con nosotros el correspondiente contrato de tratamiento de datos en cumplimiento de la normativa de protección de datos vigente.</li>
          <li>Organismos y entidades oficiales en cumplimiento de las normativas y leyes vigentes.</li>
        </ul>
        <p><strong>Destinatarios fuera de la Unión Europea:</strong> Zoraida Mercedes García Rodríguez no cede datos personales a terceros ni contrata con proveedores prestadores de servicios fuera de la Unión Europea.</p>
        <p>Los datos no se comunicarán a ningún tercero ajeno a Zoraida Mercedes García Rodríguez, fuera de los casos anteriormente descritos, salvo obligación legal o autorización previa.</p>
      </LegalSection>

      <LegalSection title="6. Derechos">
        <p>Como interesado que nos has proporcionado tus datos personales, tienes pleno derecho a obtener confirmación sobre si Zoraida Mercedes García Rodríguez está tratando tus datos personales y, en concreto, estás facultado para ejercitar los siguientes derechos que la normativa en materia de protección de datos te reconoce, conforme a lo previsto en la misma:</p>
        <ul>
          <li>Derecho de <strong>acceso</strong> a tus datos personales.</li>
          <li>Derecho a solicitar la <strong>rectificación</strong> de los datos inexactos.</li>
          <li>Derecho a solicitar su <strong>supresión</strong> cuando, entre otros motivos, los datos ya no sean necesarios para los fines para los que fueron recogidos.</li>
          <li>En determinadas circunstancias, podrás solicitar la <strong>limitación del tratamiento</strong> de tus datos, en cuyo caso únicamente los conservaremos para el ejercicio o la defensa de reclamaciones.</li>
          <li>En determinadas circunstancias y por motivos relacionados con tu situación particular, podrás ejercitar tu derecho de <strong>oposición</strong> al tratamiento de tus datos. Dejaremos de tratar los datos, salvo por motivos legítimos imperiosos, o el ejercicio o la defensa de posibles reclamaciones.</li>
          <li>En determinadas circunstancias y por motivos relacionados con tu situación particular, podrás solicitar tu derecho a la <strong>portabilidad</strong> de los datos.</li>
        </ul>
        <p>Podrás ejercer tales derechos o solicitar información adicional mediante carta dirigida a Zoraida Mercedes García Rodríguez a la dirección principal situada en C/ Félix Rodríguez de la Fuente, 27, Local 3, 18006 Granada, o a través de la dirección de correo electrónico <a href="mailto:zoripsico@gmail.com">zoripsico@gmail.com</a>.</p>
        <p>Además, en caso de que se haya vulnerado cualquiera de tus derechos, el interesado tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD), en C/ Jorge Juan, 6, 28001 Madrid, o a través de la <a href="https://sedeagpd.gob.es/sede-electronica-web/" target="_blank" rel="noopener noreferrer">sede electrónica de la AEPD</a>.</p>
      </LegalSection>

      <LegalSection title="7. Duración y modificación de la política de privacidad">
        <p>Zoraida Mercedes García Rodríguez se reserva el derecho a modificar, total o parcialmente, la presente Política de Privacidad, publicando los cambios en el Sitio Web. Asimismo, podrá efectuar sin previo aviso las modificaciones que considere oportunas, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que presta como la forma en la que estos aparezcan presentados o localizados. En consecuencia, se entenderán como vigentes las condiciones generales y políticas que estén publicadas en el momento en el que el Usuario acceda, por lo que deberá leerlas periódicamente.</p>
        <p>Con independencia de lo dispuesto, Zoraida Mercedes García Rodríguez podrá dar por terminado, suspender o interrumpir, en cualquier momento y sin necesidad de preaviso, el acceso a los contenidos del Sitio Web, sin posibilidad por parte del Usuario de exigir indemnización alguna.</p>
      </LegalSection>

      {/* No está en el texto de la consultora: se conserva de la versión
          anterior porque por WhatsApp y correo llegan datos de salud. */}
      <LegalSection title="8. Confidencialidad y secreto profesional">
        <p>Como psicóloga sanitaria colegiada, Zoraida Mercedes García Rodríguez está sujeta al secreto profesional establecido en el Código Deontológico del Psicólogo y en la Ley 41/2002, de autonomía del paciente. Toda la información compartida en el contexto de la relación terapéutica es estrictamente confidencial y no podrá ser divulgada sin el consentimiento expreso del paciente, salvo en los supuestos legalmente establecidos.</p>
      </LegalSection>

      <ReviewedBy prefix="Política de privacidad revisada" />
    </LegalPage>
  );
}
