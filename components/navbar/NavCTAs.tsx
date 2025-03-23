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
import { Clapperboard } from 'lucide-react';
import { currentUser } from '@clerk/nextjs/server';
import { Button } from '../ui/button';

export async function NavCTAs() {
  const user = await currentUser();
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
        <div className="flex items-center gap-x-4">
          <Button
            size="sm"
            variant="ghost"
            className="text-muted-foreground hover:text-primary"
            asChild
          >
            <Link href={`/u/${user?.username}`}>
              <Clapperboard className="h-5 w-5 lg:mr-2" />
              <span className="hidden lg:block">Dashboard</span>
            </Link>
          </Button>
        </div>
        <UserButton />
      </SignedIn>
    </div>
  );
}
