import Link from "next/link";

export default function Button({ children, primary, size, href }) {
  return (
    <Link href={href ? href : "#"} className={size}>
      <div
        className={
          primary
            ? "relative shadow-md md:hover:shadow-lg w-full flex justify-center p-2 md:py-3 text-sm md:text-base font-medium rounded-md text-white bg-tertiary md:hover:bg-[#055d65] md:px-6 active:scale-95 transition"
            : " w-full flex justify-center p-2 md:py-3 text-sm md:text-base font-medium rounded-md text-[#21565a] bg-[#b3e5ec] md:hover:text-white md:hover:bg-[#59b7c3] md:px-6 active:scale-95 transition"
        }
      >
        {primary && (
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/20" />
        )}
        {children}
      </div>
    </Link>
  );
}
