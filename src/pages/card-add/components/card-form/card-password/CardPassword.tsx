import { Input } from '@/components/common';
import useCardPassword from './hook/useCardPassword';
import { CARD_PASSWORD_LIMIT } from '@/domain/constant';
import { forwardRef } from 'react';

const CardPassword = forwardRef<HTMLInputElement>((_props, ref) => {
  const {
    inputRef,
    firstCardPassword = '',
    secondCardPassword = '',
    handleChange,
  } = useCardPassword();
  const [second] = inputRef;
  return (
    <div style={{ display: 'flex', gap: '5px' }}>
      <Input
        type="password"
        className="w-15"
        name="firstCardPassword"
        value={firstCardPassword}
        onChange={handleChange}
        maxLength={CARD_PASSWORD_LIMIT}
        ref={ref}
      />
      <Input
        type="password"
        className="w-15"
        name="secondCardPassword"
        value={secondCardPassword}
        onChange={handleChange}
        maxLength={CARD_PASSWORD_LIMIT}
        ref={second}
      />
      <div className="flex-center w-15">•</div>
      <div className="flex-center w-15">•</div>
    </div>
  );
});

export default CardPassword;
