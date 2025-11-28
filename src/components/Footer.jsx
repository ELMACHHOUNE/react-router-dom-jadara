export default function Footer() {
  return (
    <footer className="mt-16 text-sm text-gray-600">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <div>
          <div className="font-semibold">ReactStudy</div>
          <div className="text-gray-500">
            Practical React courses & project labs
          </div>
        </div>

        <div className="text-sm text-gray-600">
          <div className="font-semibold mb-2">Explore</div>
          <ul>
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="text-sm text-gray-600 text-right md:text-left">
          <div>
            © {new Date().getFullYear()} ReactStudy. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
