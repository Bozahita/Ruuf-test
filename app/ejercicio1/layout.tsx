import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ruuf Test - Ejercicio 1",
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