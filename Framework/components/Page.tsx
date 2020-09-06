import { TPageProps } from '@props/TPageProps';
import React from 'react';

export const Page = (props: TPageProps) => {
  return (
    <div className={'Page'} style={{ backgroundImage: `url(${props.background})` }}>
      <div className={'Page__content'}>{props.children}</div>
    </div>
  );
};
