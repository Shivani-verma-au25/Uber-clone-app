import React from "react";

const NotFoundPage = () => {
  return (
    <section className="page_404 bg-white font-serif py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full max-w-2xl text-center">
            {/* Background Section */}
            <div
              className="four_zero_four_bg bg-center bg-no-repeat bg-cover h-64 md:h-96"
              style={{
                backgroundImage: `url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')`,
              }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-gray-800 pt-16">404</h1>
            </div>
            {/* Content Box */}
            <div className="contant_box_404 -mt-8 md:-mt-16">
              <h3 className="text-lg md:text-2xl lg:text-3xl font-semibold mb-2">
                Looks like you're lost
              </h3>
              <p className="text-gray-600 text-sm md:text-base mb-4">
                The page you are looking for is not available!
              </p>
              <a
                href="/"
                className="link_404 inline-block bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition duration-200"
              >
                Go to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
