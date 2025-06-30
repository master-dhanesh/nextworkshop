import { useRouter } from "next/router";
import React from "react";

const NestednameId = () => {
    const router = useRouter();
    console.log(router);
    return <div>Nested name and Id</div>;
};

export default NestednameId;
