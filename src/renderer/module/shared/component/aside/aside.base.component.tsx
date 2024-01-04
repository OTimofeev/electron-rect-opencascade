import React from "react";

interface AsideBaseComponentProps extends React.ComponentProps<'div'> {}

export const AsideBaseComponent: React.FC<AsideBaseComponentProps> = ({ className, ...rest }) => {
  return (
    <div className={'w-full min-h-full ' + className} {...rest}>
      <ul className={'flex flex-col gap-2 mx-4 mt-12'}>
        <li>Menu 1</li>
        <li>Menu 2</li>
        <li>Menu 3</li>
      </ul>
    </div>
  );
};
