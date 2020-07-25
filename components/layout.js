import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <header className="w-full bg-gray-800 text-white py-3 px-3">
        <Link href="/">
          <a href="" className="font-bold text-2xl">
            QR
          </a>
        </Link>
      </header>
      {children}
    </React.Fragment>
  );
};

export default Layout;
