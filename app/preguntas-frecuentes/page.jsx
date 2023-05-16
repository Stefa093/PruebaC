'use client';

import Link from 'next/link';
import { useState } from 'react';
import { showText } from '@/utils/transitions';

const DropDownItem = ({ title, text }) => {
  const [active, setActive] = useState(false);

  return (
    <div
      onClick={() => setActive(!active)}
      className="border-b-2 border-zinc-300 py-4"
    >
      <h2
        className={
          active
            ? 'text-orange text-xl font-semibold cursor-pointer'
            : 'text-gray text-xl font-semibold cursor-pointer'
        }
      >
        {title}
      </h2>
      <>
        {active && (
          <div
            variants={showText}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="whitespace-pre-wrap text-gray text-xl mt-4 ease-in-out"
          >
            {text}
          </div>
        )}
      </>
    </div>
  );
};

const PreguntasFrecuentes = () => {
  return (
    <section className="cs-container">
      <h1 className="cs-sectionTitle text-left">PREGUNTAS FRECUENTES</h1>
      <h2 className="text-3xl font-light text-purple mb-10 pb-6 border-b-2">
        Alquiler
      </h2>
      <DropDownItem
        title="1. ¿Qué beneficio económico tiene el alquiler de tecnología?"
        text="El alquiler es un servicio de abastecimiento de tecnología que es flexible, lo cual significa que se ajusta a las necesidades de tiempo y cantidad de equipos. La mayoría de los clientes acceden al alquiler por periodos inferiores a 24 meses. Gracias a ello se ha convertido en el servicio que más sentido económico genera, cuando la necesidad de tecnología es de corto a mediano plazo."
      />
      <DropDownItem
        title="2. ¿Cuál es la duración mínima del alquiler?"
        text="La duración mínima de un alquiler es de quince días para equipos de cómputo. Pero periféricos como videoproyectores se pueden alquilar por días."
      />
      <DropDownItem
        title="3. ¿Cuál es el trámite para iniciar un contrato de alquiler de tecnología?"
        text="• Trámite de creación como cliente y estudio de crédito
                • Solicitud del servicio por escrito, adjuntando orden de compra
                • Información de entrega (Contacto, dirección de entrega, número de teléfono) e información relevante de facturación"
      />
      <DropDownItem
        title="4. ¿Qué requisitos debe cumplir un cliente para acceder al servicio de alquiler?"
        text="• Ser persona jurídica, y estar constituida mínimo un (1) año
                • Tener referencias comerciales"
      />
      <DropDownItem
        title="5. ¿Qué tipo de equipos se pueden alquilar?"
        text="Se pueden alquilar equipos en las siguientes categorías:

                En Computo: Portátiles en diferentes generaciones de procesador, equipos de escritorio y AIO, y tabletas.
                
                En infraestructura: servidores, suiches y firewall.
                
                Periféricos: Impresoras, escáner, lectores de código de barra y cajones monederos."
      />
      <DropDownItem
        title="6. ¿Se hace contrato de permanencia?"
        text="Los acuerdos de permanencia se definen a partir de la negociación comercial pactada con el cliente. Para ello se elabora un acta en la que se plasman los alcances del servicio, las condiciones de cánones y duración, además de los compromisos y responsabilidades de las partes."
      />
      <DropDownItem
        title="7. ¿Cuál es el mínimo de equipos que se pueden alquilar?"
        text="Es posible alquilar desde una unidad."
      />
      <DropDownItem
        title="8. ¿Cuál es el alcance de los servicios técnicos que incluye el Alquiler?"
        text="El alquiler incluye servicios técnicos para el hardware y el sistema operativo. Es decir, toda falla o incidente que se presente en el hardware, que no le permita operar de manera adecuada, Compurent tiene la obligación de corregirlo de manera que vuelva a su correcto funcionamiento.

                Estos son los tipos de servicios que incluye el alcance:
                
                - Mantenimientos Preventivos: Para contratos que sean superiores a 9 meses.
                - Soporte Correctivo: Todos los que sucedan durante el servicio
                - Cambio de equipo: En los casos que se identifique falla reincidente de máquina."
      />
      <DropDownItem
        title="9. ¿Cuáles son los Acuerdos de Niveles de Servicios?"
        text="Los Acuerdos de Niveles de Servicio, dependerán de la complejidad de situación que presente el equipo, los cuales se categorizan en tres tipos:

                1. Fallas – Cuando el equipo impide operar al usuario. Estas deben ser atendidas en menos de 1 hora y solucionarse en menos de 4 horas hábiles.
                
                2. Incidentes – Cuando el equipo permite al usuario operar relativamente bien, pero presenta alguna dificultad. Estos deben atenderse en menos de 4 horas y quedar solucionados en menos de 8 horas.
                
                3. Requerimientos – Cuando el equipo presenta un buen funcionamiento, pero se necesita algo adicional (Ej. Aumentar memoria, Cambiar versión de software). El tiempo de atención establecido para este tipo de servicios es de hasta 8 horas y para llegar a una solución podría variar según la autorización y acuerdo comercial."
      />
      <DropDownItem
        title="10. ¿Cómo es la facturación del servicio de alquiler?"
        text="El servicio se factura en el momento que se entregan los equipos. Si el cliente tiene crédito aprobado por Compurent, debe pagar según el plazo otorgado. Si el cliente no tiene crédito, el pago será de contado."
      />
      <DropDownItem
        title="11. ¿Qué tipo de seguro tienen los equipos?"
        text="Los equipos cuentan con un seguro básico que cubre; hurto con violencia en instalaciones del cliente, asonada, motín y actos mal intencionados de terceros."
      />
      <DropDownItem
        title="12. ¿Está permitido el traslado de los equipos a otras ciudades?"
        text="El cliente puede utilizar los equipos en otras ciudades, especialmente los portátiles que por su misma naturaleza así lo permiten.

                Sin embargo, cuando el cliente solicita el servicio en una ciudad, para luego trasladarlo permanentemente a otra, se debe reportar a Compurent para proceder con los ajustes en el sistema y analizar si los Acuerdos de Niveles de Servicio se pueden cumplir en la ciudad seleccionada.
                
                Otro aspecto para considerar en el traslado son los costos de transporte. Estos deben informarse para ser tenidos en cuenta en la cotización."
      />
      <DropDownItem
        title="13. ¿En que ciudades tiene cobertura el servicio técnico de alquiler?"
        text="Bogotá, Medellin, Cali, Bucaramanga, Barranquilla, Cartagena, Pereira, Manizales, Armenia, Ibagué, Cúcuta, Urabá Antioqueño, Pasto, Santa Marta, Montería y Sincelejo."
      />
      <DropDownItem
        title="14. ¿Qué valores agregados se incluyen dentro del Alquiler?"
        text="El principal valor agregado se encuentra en la digitalización del servicio desde nuestro software de administración de inventario. El cual brinda una trazabilidad sobre los aspectos claves de su operación, tales como: tipos de activos, ubicación, usuario asignado, servicios técnicos y mantenimientos.

                Con esta herramienta, los líderes de las áreas técnicas cuentan con la tranquilidad de tener una de sus responsabilidades en buenas manos.
                
                Otro valor agregado muy relevante, es la posibilidad de contar con máquinas de respaldo para el momento en que se requiera retirar alguna por fallas. De esta manera los usuarios siempre tendrán su herramienta de trabajo para evitar momentos de improductividad.
                
                Por último, consideramos que, al tener un equipo de soporte técnico certificado por los fabricantes para tal fin, aseguramos una calidad técnica del más alto nivel, que se materializa en una mayor productividad para nuestros clientes."
      />
      <DropDownItem
        title="15. ¿Qué licenciamiento le puedo instalar en los equipos alquilados?"
        text="Cada empresa puede instalar en los equipos alquilados el software que requiera para su operación o la de su equipo de trabajo, siempre y cuando el software cuente con el debido licenciamiento autorizado por sus fabricantes."
      />
      <DropDownItem
        title="16. ¿Cuáles son las clases de licenciamiento que se pueden alquilar?"
        text="El principal licenciamiento es la suite de productividad Office de Microsoft. Este fabricante ofrece una amplia variedad de productos que pueden aplicar al modelo de renting tecnológico.

                Eventualmente otros fabricantes de antivirus y seguridad, también se adaptan a la metodología de alquiler como lo es Kaspersky. Para casos de Backup de información se encuentra Acronis."
      />
      <div className="mt-10">
        <Link
          href="/contactenos"
          className="btn-orange rounded-xl px-14"
          passHref
        >
          Cotizar
        </Link>
      </div>

      <h2 className="text-3xl font-light text-purple my-10 pb-6 border-b-2">
        Renting
      </h2>
      <DropDownItem
        title="1. ¿Qué beneficio económico tiene el renting tecnológico?"
        text="El renting tiene muchos beneficios económicos para su empresa. Uno de ellos es la tercerización de la administración de inventario, atención, soporte y reparación de equipos de cómputo. Según la consultora Gartner, estos procesos consumen incluso más recursos económicos que la misma inversión que se hace en el equipo.

                Adicionalmente su empresa no invierte en activos que pierden valor aceleradamente, y de esta manera usted cuida el costo de capital para dirigirlo a actividades que realmente le generen mejores rendimientos financieros."
      />
      <DropDownItem
        title="2. ¿Qué beneficio tributario tiene el Renting de Tecnología?"
        text="El principal beneficio para el caso de renting de cómputo (activos con valor comercial inferior a USD 5.000), es que el 100% del canon es deducible del impuesto de renta. Adicionalmente, la empresa que adquiere el servicio no se está obligada a llevarlo dentro del balance general, lo cual no incrementa el valor de sus activos y pasivos."
      />
      <DropDownItem
        title="3. ¿Es mejor comprar o rentar tecnología?"
        text="Esto dependerá del escenario de cada empresa, pero en general para la mayoría es mejor rentar la tecnología. Esto se debe a que un gran número de empresas no cuentan con los recursos humanos especializados, capacidades técnicas, de infraestructura y de software para soportar un buen servicio, que les permita a sus equipos de trabajo tener siempre a disposición sus computadores para ser productivos.

                Cuando se tiene poco personal para la atención técnica, es mejor enfocar su tiempo en labores que le generen mas valor a su empresa; como estrategias de continuidad de negocio, análisis de riesgo-seguridad, y aportes a la transformación digital.
                
                Otro aspecto relevante, es que cuando se tiene la política de comprar la tecnología, las áreas financieras llevan los equipos a ciclos de vida de mas de 5 años y retrasan la decisión de renovar maquinas. Esto representa una disminución en la productividad de los empleados, mayor consumo de energía frente a equipos nuevos, y aumento de los costos de mantenimiento y reparación (a partir del año 4, los costos de mantenimiento y reparación son un 59% superiores)."
      />
      <DropDownItem
        title="4. ¿Cuál es la duración para un contrato de renting tecnológico?"
        text="La recomendación sobre el ciclo de vida de los equipos de cómputo que dan los fabricantes es de operar entre 36 a 48 meses, y es precisamente en este rango donde está la mayoría de los contratos que se realizan en el mercado. A nivel corporativo el escenario más común de renting es a 36 meses, aunque ha venido extendiéndose a 48 meses en los últimos años.

                Otro aspecto determinante para decidir la duración es entender que las máquinas que se producen hoy en día son alrededor de 2 veces más rápidas que aquellas con 3 años o más. Esto se complementa con estudios de Gartner que soportan que un cambio de PC cada 3 años da la posibilidad de disminuir los gastos totales de tenencia (TCO) en hasta un 25%."
      />
      <DropDownItem
        title="5. ¿Cuál es el trámite para iniciar un contrato de renting de tecnología?"
        text="Es un proceso sencillo de cinco pasos, que está enfocado únicamente a empresas.

                a. Encontramos el equipo que mas se ajuste a las necesidades de desempeño y de presupuesto del cliente, lo que se conoce como “perfilar la maquina”.
                b. Elaboramos una cotización formal, donde se explica a detalle el alcance del servicio.
                c. Validamos la información de la empresa contratante.
                d. Generamos firma y contrato.
                e. Entregamos las maquinas"
      />
      <DropDownItem
        title="6. ¿Qué tipo de equipos se puede contratar por modalidad de Renting a corto o largo plazo?"
        text="Lo más común a nivel corporativo son los equipos de cómputo, tanto portátiles, como equipos de escritorio. Estos se complementan con el licenciamiento de productos Microsoft y antivirus.

                También se puede acceder a tabletas, impresoras, servidores, suiches, firewall, routers, UPS o unidades de almacenamiento."
      />
      <DropDownItem
        title="7. ¿Qué tipo de seguro tienen los equipos?"
        text="Los equipos cuentan con un seguro básico que cubre hurto con violencia en instalaciones del cliente, asonada, motín y actos mal intencionados de terceros."
      />
      <DropDownItem
        title="8. ¿Cuál es el alcance de los servicios del Renting?"
        text="El renting incluye servicios técnicos para el hardware y el sistema operativo. Es decir, toda falla o incidente que se presente en el hardware, que no le permita operar de manera adecuada, Compurent tiene la obligación de corregirlo de manera que vuelva a su correcto funcionamiento."
      />
      <DropDownItem
        title="9. ¿Cuáles son los Acuerdos de Niveles de Servicios?"
        text="Los Acuerdos de Niveles de Servicio, dependerán de la complejidad de situación que presente el equipo, los cuales se categorizan en tres tipos:

                1. Fallas – Cuando el equipo impide operar al usuario. Estas deben ser atendidas en menos de 1 hora y solucionarse en menos de 4 horas hábiles.
                
                2. Incidentes – Cuando el equipo permite al usuario operar relativamente bien, pero presenta alguna dificultad. Estos deben atenderse en menos de 4 horas y quedar solucionados en menos de 8 horas.
                
                3. Requerimientos – Cuando el equipo presenta un buen funcionamiento, pero se necesita algo adicional (Ej. Aumentar memoria, Cambiar versión de software). El tiempo de atención establecido para este tipo de servicios es de hasta 8 horas y para llegar a una solución podría variar según la autorización y acuerdo comercial."
      />
      <DropDownItem
        title="10. ¿Qué valores agregados se incluyen dentro del Renting Tecnológico?"
        text="El principal valor agregado se encuentra en la digitalización del servicio desde nuestro software de administración de inventario. El cual brinda una trazabilidad sobre los aspectos claves de su operación, tales como: tipos de activos, ubicación, usuario asignado, servicios técnicos y mantenimientos.

                Con esta herramienta, los líderes de las áreas técnicas cuentan con la tranquilidad de tener una de sus responsabilidades en buenas manos.
                
                Otro valor agregado muy significativo es la posibilidad de contar con máquinas de respaldo para el momento en que se requiera retirar alguna por fallas. De esta manera los usuarios siempre tendrán su herramienta de trabajo para evitar momentos de improductividad.
                
                Por último, consideramos que, al tener un equipo de soporte técnico certificado por los fabricantes para tal fin, aseguramos una calidad técnica del más alto nivel, que se materializa en una mayor productividad para nuestros clientes."
      />
      <DropDownItem
        title="11. ¿En que casos se pueden generar sobre costos al servicio?"
        text="• Cuando ocurran daños generados por usuarios
                • Impericia a la hora de operar los equipos
                • Descarga eléctrica
                • Solicitud adicional que no esté cubierta en el alcance"
      />
      <DropDownItem
        title="12. ¿Qué licenciamiento le puedo instalar a los equipos que se tienen en Renting?"
        text="Cada empresa puede instalar en los equipos alquilados el software que requiera para su operación, o la de su equipo de trabajo, siempre y cuanto ese software cuente con el debido licenciamiento autorizado por sus fabricantes."
      />
      <DropDownItem
        title="13. ¿Cuáles son las clases de licenciamiento que se pueden arrendar?"
        text="El principal licenciamiento es la suite de productividad Office de Microsoft. Este fabricante ofrece una amplia variedad de productos que pueden aplicar al modelo de renting tecnológico.

                Eventualmente otros fabricantes de antivirus y seguridad, también se adaptan a la metodología de alquiler como lo es Kaspersky. Para casos de Backup de información se encuentra Acronis."
      />
      <DropDownItem
        title="14. ¿Cuándo se finaliza el contrato de Renting Tecnológico a corto o largo plazo se pueden comprar los equipos?"
        text="El Renting Tecnológico operativo o Renting, tiene un tratamiento tributario especial, el cual permite la deducción del 100% del valor del canon, del impuesto de Renta. Es decir, cuando el activo se utiliza durante el tiempo pactado y se devuelve, tiene el beneficio mencionado. Sin embargo, cuando va a ser adquirido al final, como en un Renting Tecnológico financiero o leasing, se pierde el beneficio tributario.
                En conclusión, en materia fiscal el canon de Renting será deducible de la renta, siempre que el contrato no clasifique como financiero de acuerdo con lo establecido por el articulo 127-1 del estatuto tributario, independientemente del tratamiento contable que se le dé, en cumplimiento del nuevo marco normativo NIIF 16."
      />
      <div className="mt-10">
        <Link
          href="/contactenos"
          className="btn-orange rounded-xl px-14"
          passHref
        >
          Cotizar
        </Link>
      </div>
    </section>
  );
};

export default PreguntasFrecuentes;
