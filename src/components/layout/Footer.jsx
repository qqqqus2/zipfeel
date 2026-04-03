"use client";

import { useState } from "react";

export default function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-md p-4">
      <div className="flex justify-between items-center">
        <span className="text-sm text-muted-foreground">© Company</span>

        <button onClick={() => setOpen(!open)} className="text-sm font-medium">
          사업자 정보
        </button>
      </div>

      {open && (
        <div className="mt-4 text-sm text-muted-foreground space-y-1">
          <p>회사명: XXX</p>
          <p>대표자: XXX</p>
        </div>
      )}
    </div>
  );
}
