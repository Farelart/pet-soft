import Link from "next/link";

export default function AppFooter() {
  return (
    <footer className="mt-auto border-t border-black/5 py-5">
      <small className="opacity-50">
        &copy; 2025 <Link href="https://github.com/Farelart">Farelart</Link>.
        All rights reserved
      </small>
    </footer>
  );
}
