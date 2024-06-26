import classNames from 'classnames';
import { type DetailedHTMLProps, type HTMLAttributes, type PropsWithChildren } from 'react';

type BaseButtonBox = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

type ButtonBoxProps = Record<string, unknown> & PropsWithChildren<BaseButtonBox>;

export const ButtonBox = ({ className, children }: ButtonBoxProps) => (
  <div className={classNames(className, 'button-box')}>{children}</div>
);
