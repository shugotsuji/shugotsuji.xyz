import type { LinkProps } from "next/link";
import Link from "next/link";
import type { FC } from "react";
import s from "./Header.module.css";

interface HeaderLinkProps extends LinkProps {
  children: string;
}

export const HeaderLink: FC<HeaderLinkProps> = ({ children, href }) => {
  return (
    <li className="px-3 leading-5 text-left text-gray-900 hover:text-gray-500 align-baseline">
      <Link href={href}>
        <a className="text-2x no-underline cursor-pointer md:text-base lg:text-xl">
          {children}
        </a>
      </Link>
    </li>
  );
};

export const Header: FC = () => {
  return (
    <nav className={s.glass}>
      <header className="box-border flex sticky z-30 justify-between items-center p-8 my-6 mx-auto w-full max-w-3xl leading-5 text-gray-400 align-baseline bg-inherit/60 transition ease-in sm:py-4 md:py-6 md:my-8">
        <div className="flex grow shrink-0 items-center max-w-screen-sm align-baseline">
          <Link href="/">
            <a aria-current="page" className="group">
              <span  className="pr-2 text-3xl group-hover:opacity-60 sm:pr-3 md:pr-5">
              🐉
              </span>
              <span className="text-xl text-transparent group-hover:underline bg-clip-text bg-gradient-to-r from-gray-500 group-hover:from-gray-400 via-gray-700 group-hover:via-gray-400 to-gray-900 group-hover:to-gray-400 lg:text-2xl">
                LOVE SHIBUYA
              </span>
            </a>
          </Link>
        </div>
        <nav className="hidden grow shrink-0 align-baseline md:block">
          <ul className="flex justify-end items-center leading-5">
            <HeaderLink href="/about">About</HeaderLink>
            <HeaderLink href="/blog">Blog</HeaderLink>
            <HeaderLink href="/contact">Contact</HeaderLink>
          </ul>
        </nav>
      </header>
    </nav>
  );
};