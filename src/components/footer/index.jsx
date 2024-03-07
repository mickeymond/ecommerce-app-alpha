
export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white p-6 mt-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
              <p>Email: contacte@alphacommerce.com</p>
              <p>Phone: 123-456-7890</p>
            </div>
            <div className="mt-4 md:mt-0 text-center flex flex-col items-center">
              <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com" className="text-gray-300 hover:text-white" target="_blank" rel="noopener noreferrer">
          Facebook
      </a>
      <a href="https://www.twitter.com" className="text-gray-300 hover:text-white" target="_blank" rel="noopener noreferrer">
          Twitter
      </a>
      <a href="https://www.instagram.com" className="text-gray-300 hover:text-white" target="_blank" rel="noopener noreferrer">
          Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
           <nav className="navbar flex space-x-6 justify-center">
           <ul className="flex space-x-4 ">
          <li><a href="/" className="hover:text-orange-500">Home</a></li>
          <li><a href="/catalogue" className="hover:text-orange-500">Catalogue</a></li>
          <li><a href="/contact-us" className="hover:text-orange-500">Contact Us</a></li>
           </ul>
            </nav>
          <p className="mt-4">&copy; 2024 Alpha Ecommerce. All rights reserved.</p>
        </div>
      </footer>
    );
  };