import Link from "next/link";

export const LinkComponent = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="block px-6 py-4 text-lg md:text-sm font-semibold hover:bg-gray-100 hover:text-[#3559C7] transition"
    >
      {children}
    </Link>
  );
};
