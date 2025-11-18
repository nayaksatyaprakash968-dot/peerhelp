export default function Footer() {
  return (
    <footer className="mt-10 py-6 text-center border-t border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
      <p className="text-sm">
        © {new Date().getFullYear()} PeerHelp — All Rights Reserved.
      </p>
    </footer>
  );
}
