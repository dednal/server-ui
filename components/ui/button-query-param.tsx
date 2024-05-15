"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const ButtonQueryParam = (props: any) => {
  const { children, queryParam, queryParamValue } = props;

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleClick = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(queryParam, queryParamValue);
    router.push(`${pathname}?${params.toString()}`);
  };
  return (
    <button className="bg-blue-500 text-white" onClick={handleClick}>
      {children}
    </button>
  );
};
