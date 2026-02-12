import "./index.css"
import PropTypes from "prop-types"

export const metadata = {
  title: "San Valentín",
  description: "Proyecto del 14 de Febrero",
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}

RootLayout.propTypes = {
  children: PropTypes.node
}
