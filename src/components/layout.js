import PropTypes from "prop-types";
import React from "react";

function Layout({ children }) {
  return (
    <div className="flex flex-col items-center min-h-screen font-sans text-gray-900">
      <main className="flex flex-1 items-center justify-center w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
        {children}
      </main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
