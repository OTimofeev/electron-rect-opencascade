import React from 'react';
import { ModelComponent } from '../shared/rmodel/model.component';
import { BaseLayout } from '../shared/layout/base/base.layout';

export const MainView = () => {
return (
    <div>
      <BaseLayout>
        <ModelComponent />
      </BaseLayout>
    </div>
  );
}
