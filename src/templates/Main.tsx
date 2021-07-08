import React, { ReactNode } from 'react';

import { AppConfig } from '../utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="h-full bg-gray-200">
    {props.meta}
    <div className="max-w-screen-md mx-auto">
      <div className="border-b border-gray-300 py-10">
        <div className="text-center font-bold text-3xl text-gray-900">
          {AppConfig.title}
        </div>
        <div className="text-center text-xl mb-5">{AppConfig.description}</div>
      </div>
      <div className="py-5 text-xl content">{props.children}</div>
      <div className="border-t border-gray-300 text-center py-8 text-sm">
        By <a href="https://nahuel.dev">Nahuel Krowicki</a>
      </div>
    </div>
  </div>
);

export { Main };
