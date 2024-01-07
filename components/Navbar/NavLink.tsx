import Link from "next/link";

interface Props {
  id: string;
  title: string;
  active: string;
  setActive: (id: string) => void;
  toggle?: () => void;
}

export default function NavLink({
  id,
  title,
  active,
  setActive,
  toggle,
}: Props) {
  return (
    <li>
      <Link
        href={"/#" + id}
        className={`${active === id ? "text-white" : "text-secondary"} ${
          toggle ? "font-poppins text-[16px]" : "hover:text-white text-[18px]"
        } font-medium cursor-pointer`}
        onClick={() => {
          toggle?.();
          setActive(id);
          window.scrollTo(0, 0);
        }}
      >
        {title}
      </Link>
    </li>
  );
}
