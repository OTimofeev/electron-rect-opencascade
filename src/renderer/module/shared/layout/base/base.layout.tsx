import { ReactNode } from "react";
import { HeaderComponent } from "../../component/header/header.component";
import { AsideBaseComponent } from "../../component/aside/aside.base.component";

export const BaseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <HeaderComponent />
      <div className={'flex flex-row'}>
        <AsideBaseComponent className={'max-w-60'} />
        <main className={'flex-grow flex justify-center m-4'}>
          <div className={'flex flex-col justify-center grow'}>
            {children}
          </div>
        </main>
      </div>
      <footer className={'fixed bottom-0 left-0 p-4 text-white'}>Some footer here</footer>
    </div>
  );
};
