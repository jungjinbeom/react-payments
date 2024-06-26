import { type HTMLAttributes } from 'react';

type BaseModalItemDot = HTMLAttributes<HTMLDivElement>;

type ModalItemDotProps = {
  onClick: () => void;
} & BaseModalItemDot;

const ModalItemDot = ({ onClick, style }: ModalItemDotProps) => (
  <div className="modal-item-dot" style={style} onClick={onClick} />
);

export default ModalItemDot;
