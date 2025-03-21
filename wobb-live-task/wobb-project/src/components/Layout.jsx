import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">{children}</main>
      <footer className="bg-white shadow-inner py-4 mt-8">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <p>© {new Date().getFullYear()} StackTalk. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
