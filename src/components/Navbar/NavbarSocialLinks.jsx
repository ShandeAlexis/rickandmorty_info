import React from 'react';

export const NavbarSocialLinks = () => {
  return (
    <div className="flex justify-center mt-6 lg:flex lg:mt-0 lg:-mx-1">
      {/* Reddit Icon */}
      <a
        href="#"
        className="mx-2 text-white transition-colors duration-300 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300"
        aria-label="Reddit"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.447 17.302c-.408.408-1.02.547-1.557.358-1.063-.372-2.774-.398-3.859 0-.536.189-1.148.051-1.556-.358-.41-.41-.549-1.023-.358-1.556.372-1.063.398-2.774 0-3.859-.191-.536-.052-1.148.358-1.557.41-.408 1.023-.549 1.556-.358 1.064.372 2.775.398 3.859 0 .536-.191 1.148-.051 1.556.358.41.41.549 1.024.358 1.557-.372 1.063-.398 2.774 0 3.859.191.536.052 1.148-.358 1.556z" />
        </svg>
      </a>

      {/* Facebook Icon */}
      <a
        href="#"
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
      {/* GitHub Icon */}
      <a
        href="#"
        className="mx-2 text-white transition-colors duration-300 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300"
        aria-label="Github"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.774.418-1.305.763-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.47-2.382 1.236-3.223-.124-.303-.536-1.527.116-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.289-1.553 3.295-1.23 3.295-1.23.653 1.649.241 2.873.118 3.176.77.841 1.236 1.913 1.236 3.223 0 4.61-2.804 5.622-5.475 5.922.43.371.824 1.102.824 2.222 0 1.606-.014 2.898-.014 3.293 0 .321.216.694.825.576C20.565 22.092 24 17.593 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      </a>
    </div>
  );
};
