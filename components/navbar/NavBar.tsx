import React from 'react';
import { MaxWidthWrapper } from '../utils/MaxWidthWrapper';
import { NavLogo } from './NavLogo';
import { NavLinks } from './NavLinks';
import { NavCTAs } from './NavCTAs';
import { Search } from './Search';
import { SignedOut } from '@clerk/nextjs';
import { NavAnimation } from './NavAnimation'; // Import the client-side scroll animation

export const NavBar = () => {
  return (
    <NavAnimation>
      {' '}
      {/* Handles motion and scroll */}
      <MaxWidthWrapper>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            <NavLogo />
            <SignedOut>
              <div className="hidden md:block">
                <NavLinks />
              </div>
            </SignedOut>
          </div>
          <Search />
          <NavCTAs />
        </div>

        <SignedOut>
          <div className="block pt-1.5 md:hidden">
            <NavLinks />
          </div>
        </SignedOut>
      </MaxWidthWrapper>
    </NavAnimation>
  );
};

export default NavBar;
