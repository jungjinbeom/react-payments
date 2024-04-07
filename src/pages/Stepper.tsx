import ModalProvider from '@/provider/modal-provider/ModalProvider';
import useStepContext from '@/provider/step-provider/hook/useStepContext';
import { AddCard, CardList, CardRegisterComplete } from '.';

const StepperContent = {
  LIST: <CardList />,
  CARD: (
    <ModalProvider>
      <AddCard />
    </ModalProvider>
  ),
  COMPLETE: (
    <ModalProvider>
      <CardRegisterComplete />
    </ModalProvider>
  ),
};
const Stepper = () => {
  const { route } = useStepContext();
  return StepperContent[route];
};

export default Stepper;
