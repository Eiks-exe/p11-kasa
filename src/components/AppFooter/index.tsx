import * as React from 'react';
import IconAppLogo from '../Icons/IconAppLogo';

export interface IAppFooterProps {
}

export default function AppFooter(props: IAppFooterProps) {
  return (
    <footer id="footer">
      <IconAppLogo color={'white'} scale={{ width: '122px', height: '40px'}} />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
