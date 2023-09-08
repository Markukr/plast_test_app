"use client";

import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";

const links = [
   {
      id: 1,
      title: "Головна",
      url: "/",
   },
   {
      id: 2,
      title: "Наші проекти",
      url: "/projects",
   },
   {
      id: 3,
      title: "Новини",
      url: "/blog",
   },
   {
      id: 4,
      title: "Про нас",
      url: "/about",
   },
   {
      id: 5,
      title: "Контакти",
      url: "/contact",
   },
   {
      id: 6,
      title: "Адмін панель",
      url: "/dashboard",
   },
];

const Navbar = () => {
   const session = useSession();

   return (
      <div className={styles.container}>
         <Link href="/" className={styles.logo}>
            PLAST DANMARK
         </Link>
         <div className={styles.links}>
            <DarkModeToggle />
            {links.map((link) => (
               <Link key={link.id} href={link.url} className={styles.link}>
                  {link.title}
               </Link>
            ))}
            {session.status === "authenticated" && (
               <button className={styles.logout} onClick={signOut}>
                  LogOut
               </button>
            )}
         </div>
      </div>
   );
};

export default Navbar;