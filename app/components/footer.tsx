import React from "react";
import image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-300">
      <div className="container mx-auto py-4">
        <div className="flex justify-between">
          <div className="w-1/4">
            <image
              src="https://res.cloudinary.com/dkvo22lv7/image/upload/v1700609039/conshadow_yekd6i.png"
              alt="Logo"
              className="w-16 h-16"
            />
          </div>
          <div className="w-3/4">
            <ul className="flex justify-end space-x-4">
              <li>
                <a href="#">Enlace 1</a>
              </li>
              <li>
                <a href="#">Enlace 2</a>
              </li>
              <li>
                <a href="#">Enlace 3</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
