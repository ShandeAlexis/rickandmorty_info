import React from "react";

export default function Footer() {
    const añoActual = new Date().getFullYear();
  return (
    <footer className="bg-black dark:bg-gray-900">
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center sm:flex-row sm:justify-around">
          <p className="text-sm text-white">
            © Copyright {añoActual}. Hecho por Alexis Diaz.
          </p>

          <div className="flex mt-3 -mx-2 sm:mt-0">
            {/* Facebook Icon */}
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 text-white transition-colors duration-300 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128v-2.65c0-3.1 1.893-4.788 4.66-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.917.001c-1.504 0-1.794.715-1.794 1.764v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>

            {/* Instagram Icon */}
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 text-white transition-colors duration-300 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.17.054 1.96.24 2.415.415a4.92 4.92 0 011.691 1.1c.441.441.814.98 1.1 1.691.175.455.361 1.245.415 2.415.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.054 1.17-.24 1.96-.415 2.415a4.92 4.92 0 01-1.1 1.691c-.441.441-.98.814-1.691 1.1-.455.175-1.245.361-2.415.415-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.17-.054-1.96-.24-2.415-.415a4.92 4.92 0 01-1.691-1.1c-.441-.441-.814-.98-1.1-1.691-.175-.455-.361-1.245-.415-2.415C2.175 15.416 2.163 15.036 2.163 12s.012-3.584.07-4.849c.054-1.17.24-1.96.415-2.415a4.92 4.92 0 011.1-1.691c.441-.441.98-.814 1.691-1.1.455-.175 1.245-.361 2.415-.415 1.265-.058 1.645-.07 4.849-.07zM12 0C8.741 0 8.332.013 7.053.07 5.77.127 4.835.338 4.042.644a6.88 6.88 0 00-2.467 1.678A6.88 6.88 0 00.644 4.042C.338 4.835.127 5.77.07 7.053.013 8.332 0 8.741 0 12c0 3.259.013 3.668.07 4.947.057 1.283.268 2.218.574 3.011a6.88 6.88 0 001.678 2.467 6.88 6.88 0 002.467 1.678c.793.306 1.728.517 3.011.574 1.279.057 1.688.07 4.947.07s3.668-.013 4.947-.07c1.283-.057 2.218-.268 3.011-.574a6.88 6.88 0 002.467-1.678 6.88 6.88 0 001.678-2.467c.306-.793.517-1.728.574-3.011.057-1.279.07-1.688.07-4.947s-.013-3.668-.07-4.947c-.057-1.283-.268-2.218-.574-3.011a6.88 6.88 0 00-1.678-2.467A6.88 6.88 0 0019.958.644C19.165.338 18.23.127 16.947.07 15.668.013 15.259 0 12 0zm0 5.838a6.163 6.163 0 100 12.326 6.163 6.163 0 000-12.326zm0 10.164a3.9 3.9 0 110-7.8 3.9 3.9 0 010 7.8zm7.406-10.615a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
              </svg>
            </a>

            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 text-white transition-colors duration-300 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M20.447 20.452H17.78v-5.576c0-1.33-.027-3.043-1.855-3.043-1.855 0-2.14 1.445-2.14 2.938v5.68H10.11V9h2.559v1.561h.037c.356-.674 1.226-1.385 2.527-1.385 2.703 0 3.204 1.779 3.204 4.094v6.182zM5.337 7.433a1.496 1.496 0 110-2.992 1.496 1.496 0 010 2.992zM6.552 20.452H3.837V9h2.715v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.726v20.451C0 23.224.792 24 1.771 24h20.451C23.203 24 24 23.224 24 22.177V1.726C24 .774 23.203 0 22.225 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
