'use client';

import { Link, usePathname } from '@/i18n/routing';

export default function BackButton() {
  const pathname = usePathname();

  const isHomePage = pathname === '/';

  return (
    !isHomePage && (
      <div className="absolute top-4 left-4">
        <Link href="/" className="text-blue-500 hover:underline">
          Back
        </Link>
      </div>
    )
  );
}
