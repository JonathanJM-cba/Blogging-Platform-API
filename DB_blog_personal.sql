--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4
-- Dumped by pg_dump version 17.4

-- Started on 2025-04-30 23:01:35

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE "DB_blog_personal";
--
-- TOC entry 4897 (class 1262 OID 24576)
-- Name: DB_blog_personal; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE "DB_blog_personal" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'es-ES';


ALTER DATABASE "DB_blog_personal" OWNER TO postgres;

\connect "DB_blog_personal"

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4891 (class 0 OID 24578)
-- Dependencies: 218
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.posts (id, title, content, category, tags, "createdAt", "updatedAt") VALUES (3, 'Estudiar NodeJS y Express', 'Estudia NodeJS, el entorno de ejecución javascript y además el framework Express para desarrollo de APIs', 'Tecnología', '{Backend,Programación}', '2025-04-30 20:55:17.004-03', '2025-04-30 21:08:15.771-03');
INSERT INTO public.posts (id, title, content, category, tags, "createdAt", "updatedAt") VALUES (4, 'Grabar Clase', 'Grabar la clase de Express para subir a Youtube', 'Aprendizaje', '{Clases,Programación,Videos}', '2025-04-30 22:05:00.552-03', '2025-04-30 22:05:00.552-03');


--
-- TOC entry 4899 (class 0 OID 0)
-- Dependencies: 217
-- Name: posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.posts_id_seq', 4, true);


-- Completed on 2025-04-30 23:01:35

--
-- PostgreSQL database dump complete
--

