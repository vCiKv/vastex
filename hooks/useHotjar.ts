"use client"
import { useEffect } from "react"
import Hotjar from '@hotjar/browser';

export default function useHotjar() {
  const siteId = 6456416;
  const hotjarVersion = 6;
  useEffect(() => {
    if (typeof window !== "undefined") {
      Hotjar.init(siteId, hotjarVersion);
    }
  }, [])
}