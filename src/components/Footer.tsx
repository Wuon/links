import React from "react";

const Footer = () => {
  return (
    <footer className="mb-8">
      <span className="block text-sm text-gray-400 text-center">
        Links by{" "}
        <a
          href="https://github.com/wuon"
          className="hover:underline underline-offset-1 text-sky-500"
        >
          wuon
        </a>
        . View on{" "}
        <a
          href="https://github.com/Wuon/links"
          className="hover:underline underline-offset-1 text-sky-500"
        >
          GitHub
        </a>
        .
      </span>
    </footer>
  );
};

export default Footer;
