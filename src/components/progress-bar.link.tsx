"use client"
import React, {ComponentProps, startTransition} from 'react'
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import {useProgressBar } from "./progress-bar"

export function Link({
    href,
    children,
    ...rest
  }: ComponentProps<typeof NextLink>) {
    const progress = useProgressBar();
    const router = useRouter();
  
    return (
      <NextLink
        href={href}
        onClick={(e) => {
          e.preventDefault();
          progress.start();
  
          startTransition(() => {
            router.push(href.toString());
            progress.done();
          });
        }}
        {...rest}
      >
        {children}
      </NextLink>
    );
  }