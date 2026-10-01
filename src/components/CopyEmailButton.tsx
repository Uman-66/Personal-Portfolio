"use client";

import { Copy } from "lucide-react";

export function CopyEmailButton({ email }: { email: string }) {
  return (
    <button
      className="button"
      type="button"
      onClick={() => void navigator.clipboard?.writeText(email)}
    >
      <Copy size={16} /> Copy email
    </button>
  );
}
