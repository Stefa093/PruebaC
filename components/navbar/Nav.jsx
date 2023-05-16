'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <section className="cs-container bg-white h-[60px] flex justify-between items-center">
      <div>
        <Link href="/">
          <Image
            src="/assets/logo/blueLogo.svg"
            width={189}
            height={33.41}
            alt="Compurent Logo"
            priority={true}
          />
        </Link>
      </div>
      <div className="absolute top-[60px] left-0 bg-white flex flex-col w-[100%] h-[100vh] -translate-x-[100%] ease-in-out duration-300 lg:relative">
        <Link
          href="/renting-computadores"
          className="m-10 text-xl text-purple lg:cs-inactive-navbar lg:hover:cs-active-navbar"
          passHref
        >
          Renting tecnológico
        </Link>
        <Link
          href="/alquiler-computadores"
          className="m-10 text-xl text-purple lg:cs-inactive-navbar lg:hover:cs-active-navbar"
          passHref
        >
          Alquiler de computadores
        </Link>
        <Link
          href="/almacenamiento-nube"
          className="m-10 text-xl text-purple lg:cs-inactive-navbar lg:hover:cs-active-navbar"
          passHref
        >
          Servicios en la nube
        </Link>
        <Link
          href="/quienes-somos"
          className="m-10 text-xl text-purple lg:cs-inactive-navbar lg:hover:cs-active-navbar"
          passHref
        >
          ¿Quiénes somos?
        </Link>
        {/* <Link href='/blog' passHref>
            <motion.a 
              variants={hoverScale}
              whileHover='hover' 
              className={router.pathname.startsWith('/blog') ? 'cs-active-navbar' : 'cs-inactive-navbar'}
            >
                Blog
            </motion.a>
          </Link> */}
        <Link
          href="/contactenos"
          className="m-10 text-xl text-purple lg:cs-inactive-navbar lg:hover:cs-active-navbar"
          passHref
        >
          Contáctanos
        </Link>
      </div>

      <div
        className={`nav_toogle ${showMenu && 'open'}`}
        onClick={() => setShowMenu(!showMenu)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* {showMenu && (
          <div
            className="absolute bg-purpleop w-full h-[100vh] left-0 top-0 z-20"
            variants={mobileContainer}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div
              className="bg-white w-[80%] h-full p-10"
              variants={menuContainer}
            >
              <div className="flex justify-between items-center">
                <Link href="/" passHref>
                  <Image
                    src="/assets/logo/blueLogo.svg"
                    width={160}
                    height={32}
                    alt="Compurent Logo"
                  />
                </Link>
                
              </div>
              <div className="mt-20">
                <Link
                  href="/renting-computadores"
                  className="flex items-center justify-between py-4"
                >
                  <p className="text-xl text-purple ">Renting tecnológico</p>
                </Link>
                <Link
                  href="/alquiler-computadores"
                  className="flex items-center justify-between py-4"
                >
                  <p className="text-xl text-purple ">
                    Alquiler de computadores
                  </p>
                </Link>
                <Link
                  href="/almacenamiento-nube"
                  className="flex items-center justify-between py-4"
                >
                  <p className="text-xl text-purple ">Servicios en la nube</p>
                </Link>
                <Link
                  href="/quienes-somos"
                  className="flex items-center justify-between py-4"
                >
                  <p className="text-xl text-purple ">¿Quiénes somos?</p>
                </Link>
                <Link
                  href="/blog"
                  className="flex items-center justify-between py-4"
                >
                  <p className="text-xl text-purple ">Blog</p>
                </Link>
                <Link
                  href="/contactenos"
                  className="flex items-center justify-between py-4"
                >
                  <p className="text-xl text-purple ">Contáctanos</p>
                </Link>
              </div>
            </div>
          </div>
        )} */}
    </section>
  );
};

export default Nav;
