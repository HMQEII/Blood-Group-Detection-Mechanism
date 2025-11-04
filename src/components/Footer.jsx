function Footer() {
  return (
    <footer className="flex items-center justify-center gap-2 py-4 text-gray-300">
      {/* <img src="/favicon.ico" alt="Favicon" className="w-5 h-5 animate-pulse" /> */}
      <p className="text-sm">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
