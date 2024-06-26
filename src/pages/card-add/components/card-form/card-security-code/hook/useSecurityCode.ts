import { isValidNumber } from '@/domain/validate';

import useCardContext from '@/provider/card-info-provider/hooks/useCardContext';

import { RefObject, type ChangeEvent } from 'react';

type UseCardSecurityCode = {
  nextFocus: RefObject<HTMLInputElement>;
};

const useSecurityCode = ({ nextFocus }: UseCardSecurityCode) => {
  const {
    cardState: { securityCode },
    handleCardState,
  } = useCardContext();

  const handleScurityCode = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (isValidNumber(value)) {
      handleCardState({ [name]: value });
      if (value.length === 3) {
        nextFocus?.current?.focus();
      }
    }
  };

  return { securityCode, handleScurityCode };
};

export default useSecurityCode;
