export default function Footer() {
  return (
    <div className="w-full">
      <footer className="mt-16 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} ReactStudy. All rights reserved.
      </footer>
    </div>
  );
}
