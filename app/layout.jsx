import Footer from '@/components/Footer';
import Nav from '@/components/navbar/Nav';
import Script from 'next/script';

import './globals.css';

// import ReactDOM from 'react-dom';

export const metadata = {
  title: 'Tu aliado en Renting Tecnológico | Compurent',
  description:
    'Compurent te ofrece servicio de alquiler de computadores para tu empresa, con plazos de hasta 36 meses y soluciones en la nube ¡Empieza a ahorrar hoy!',
  metadataBase: new URL('https://compurent.com.co/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Compurent Home',
    siteName: 'Compurent',
    locale: 'es-CO',
    type: 'website',
  },
  keywords: [
    'alquilar tecnología',
    'compurent',
    'alquiler de computo',
    'alquiler de servidores',
    'alquiler de almacenamiento',
  ],
  icons: '/icon.png',
};

// export function PreloadResources(href) {
//   ReactDOM.preload(href, { as: 'style' });
//    return null;
// }

// export function preloadFont(href, type) {
//   ReactDOM.preload(href, { as: 'font', type });
//    return null;
// }

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <main>
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=GTM-KDW6LX2`}
      ></Script>
      <Script id="gtag">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'GTM-KDW6LX2');`}
      </Script>
    </html>
  );
}
