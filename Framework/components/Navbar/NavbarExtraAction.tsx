import React from 'react';
// @ts-ignore
import { Link } from '@routes';
import { TNavbarExtraActionProps } from '@props/TNavbarExtraActionProps';
import { Icon } from '@components/Icon';

export const NavbarExtraAction = (props: TNavbarExtraActionProps) => (
  <div className="btn-group">
    <Link route={props.route}>
      <a className="nav-link extra-action">
        <Icon icon={props.icon} />
        {props.text}
      </a>
    </Link>
  </div>
);
