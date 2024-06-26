import useCardContext from '@/provider/card-info-provider/hooks/useCardContext';
import useModalContext from '@/provider/modal-provider/hooks/useModalContext';
import useStepContext from '@/provider/step-provider/hook/useStepContext';

import { Card } from '@/components/card';
import { PageTitle } from '@/components/common';
import CardForm from './components/card-form/CardForm';

const AddCard = () => {
  const { navigate } = useStepContext();
  const { cardState } = useCardContext();

  const { cardBrand, toggle } = useModalContext();

  const goToPage = () => navigate('LIST');

  return (
    <div className="app">
      <PageTitle>
        <div onClick={goToPage}>{'< 카드 추가'}</div>
      </PageTitle>
      <Card {...cardBrand} {...cardState} onClick={toggle} />
      <CardForm />
    </div>
  );
};

export default AddCard;
