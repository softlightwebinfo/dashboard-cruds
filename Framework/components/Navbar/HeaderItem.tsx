import { Icon } from '@components/Icon';
import React from 'react';
import { THeaderItemProps } from '@props/THeaderItemProps';
// @ts-ignore
import { Link } from '@routes';

export const HeaderItem = (props: THeaderItemProps) => {
    const item = (
        <a href={props.href} className="nav-link py-0" target={props.target}>
            <Icon icon={props.icon}/>
            {props.text}
            <span className="sr-only">(current)</span>
        </a>
    );
    return (
        <li className="nav-item mt-0 pt-2 nav-action nav-action-hoverable">
            {props.router ? (<Link route={props.router}>
                    {item}
                </Link>
            ) : item}
        </li>
    );
}
