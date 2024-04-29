import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ruuf Test - Ejercicio 3",
};

export default function Ejercicio1Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>{children}</>
    );
}