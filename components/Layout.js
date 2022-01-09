import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <main className="overflow-hidden layout">
      <Head>
        <title>Roman Raizen - Web Creator - Personal Website</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      {children}
    </main>
  )
}

export default Layout