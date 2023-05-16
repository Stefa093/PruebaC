import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="home__bgFooter"></div>
      <section className="bg-purple -mt-1 py-16 flex flex-col justify-center items-center">
        <article className="flex flex-row">
          <article className="flex flex-col md:flex-row md:gap-20">
            <article className="flex flex-col xs:items-center pb-10">
              <h3 className="text-white mb-2 text-2xl font-semibold">
                Información
              </h3>
              <Link href="/politica-de-privacidad" className="foot-link">
                Política de privacidad
              </Link>
              <Link href="/condiciones-de-uso" className="foot-link">
                Condiciones de uso
              </Link>
              <Link href="/proteccion-de-datos" className="foot-link">
                Protección de datos
              </Link>
              <Link href="/preguntas-frecuentes" className="foot-link">
                Preguntas frecuentes
              </Link>
            </article>
            <article className="flex flex-col xs:items-center pb-10">
              <h3 className="text-white text-2xl mb-2 font-semibold">
                Servicio al cliente
              </h3>
              <Link href="/quienes-somos" className="foot-link">
                Sobre nosotros
              </Link>
              <Link href="/contactenos" className="foot-link">
                Contáctanos
              </Link>
              <Link
                href="https://www.sic.gov.co/proteccion-del-consumidor"
                target="_blank"
                rel="noreferrer"
                className="foot-link"
              >
                SIC-Protección al consumidor
              </Link>
            </article>
          </article>

          <article className="flex flex-col gap-6 mb-auto pb-7 md:flex-row md:ml-14">
            <Link
              href="https://twitter.com/Compurent1"
              className="hover:scale-110 duration-200"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/assets/icon/twitterIcon.svg"
                width={32}
                height={32}
                alt="Twitter Icon"
                loading="lazy"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/company/compurent-sas/mycompany/"
              className="hover:scale-110 duration-200"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/assets/icon/linkedInIcon.svg"
                width={32}
                height={32}
                alt="LinkedIn Icon"
                loading="lazy"
              />
            </Link>
            <Link
              href="https://www.facebook.com/Compurent1"
              className="hover:scale-110 duration-200 "
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/assets/icon/facebookicon.svg"
                width={32}
                height={32}
                alt="Facebook Icon"
                loading="lazy"
              />
            </Link>
          </article>
        </article>
        <article className="text-white text-center w-[100%] mx-auto px-8 xl:flex-row xl:max-w-[1200px]">
          <p vocab="http://schema.org/" typeof="Organization">
            <span property="address">Calle 10 sur N 48 A - 55 Medellín.</span>
            <span property="telephone" className="ml-2">
              Teléfono: +57 313 668 2380
            </span>
            <span property="email" className="ml-2">
              Email: contacto@compurent.com.co
            </span>
          </p>
          <small className="ml-2">
            Colombia - &#169; Todos los derechos reservados.
          </small>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
