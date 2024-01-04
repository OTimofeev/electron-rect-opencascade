import React from "react";

interface HeaderComponentProps extends React.ComponentProps<"div"> {
}

export const HeaderComponent: React.FC<HeaderComponentProps> = ({ className, ...rest }) => {

  return (
    <header className={"w-full h-16 bg-blue-400 flex flex-col justify-center " + className} {...rest}>
      <div className={"flex justify-between w-full"}>
        <div className="logo rounded-full w-10 h-10 text-white" >
          <h2 className={'px-4 py-2 font-bold text-xl'}>Logo</h2>
        </div>
        <div className="menu">
          <ul className="flex gap-4 text-white">
            <li className="px-4 py-2">Menu 1</li>
            <li className="px-4 py-2">Menu 2</li>
            <li className="px-4 py-2">Menu 3</li>
          </ul>
        </div>
      </div>
    </header>
  );
};
