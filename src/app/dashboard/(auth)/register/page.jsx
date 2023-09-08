"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
   const [error, setError] = useState(null);

   const router = useRouter();

   const handleSubmit = async (e) => {
      e.preventDefault();
      const name = e.target[0].value;
      const email = e.target[1].value;
      const password = e.target[2].value;

      try {
         const res = await fetch("/api/auth/register", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({
               name,
               email,
               password,
            }),
         });
         res.status === 201 && router.push("/dashboard/login?success=Обліковий запис створено");
      } catch (err) {
         setError(err);
         console.log(err);
      }
   };

   return (
      <div className={styles.container}>
         <h1 className={styles.title}>Створити аккаунт</h1>
         <h2 className={styles.subtitle}>Будь ласка, зареєструйтеся, щоб побачити інформаційну панель.</h2>
         <form onSubmit={handleSubmit} className={styles.form}>
            <input
               type="text"
               placeholder="Username"
               required
               className={styles.input}
            />
            <input
               type="text"
               placeholder="Email"
               required
               className={styles.input}
            />
            <input
               type="password"
               placeholder="Password"
               required
               className={styles.input}
            />
            <button className={styles.button}>Реєстрація</button>
            {error && "Something went wrong!"}
         </form>
         <span className={styles.or}>- АБО -</span>
         <Link className={styles.link} href="/dashboard/login">
            Увійдіть за допомогою існуючого облікового запису
         </Link>
      </div>
   );
};

export default Register;