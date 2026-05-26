import React from 'react'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

export default function HideIcon({ show, ...props }) {
  const Icon = show ? FaRegEye : FaRegEyeSlash;
  return <Icon{...props} />
}

