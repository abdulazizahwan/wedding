import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Custom404() {
    const router = useRouter();

    // Redirect to homepage on load
    useEffect(() => {
        router.replace("/");
    });

    return null;
}