import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { AppConfig } from '../utils/AppConfig';

const Index = () => {
  return (
    <Main meta={<Meta title="Challenge" description={AppConfig.description} />}>
      <h1 className="text-center font-bold">Step 1</h1>
    </Main>
  );
};

export default Index;
