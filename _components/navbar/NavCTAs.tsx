import React from 'react';
import Link from 'next/link';
import { SplashButton } from '../buttons/SplashButton';
import { GhostButton } from '../buttons/GhostButton';
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';

export const NavCTAs = () => {
  return (
    <div className="flex items-center gap-2">
      <Link href="/signin">
        <SignedOut>
          <SignUpButton>
            <GhostButton className="rounded-md px-4 py-1 text-base">
              Sign Up
            </GhostButton>
          </SignUpButton>
        </SignedOut>
      </Link>
      <Link href="/signin">
        <SignedOut>
          <SignInButton>
            <SplashButton className="px-4 py-1 text-base text-zinc-100">
              Sign In
            </SplashButton>
          </SignInButton>
        </SignedOut>
      </Link>

      <SignedIn>
        <UserButton showName />
      </SignedIn>
    </div>
  );
};
