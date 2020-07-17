import image from '@/assets/imgs/modal-close.png'
import React, { PropsWithChildren } from 'react'
import ReactDOM from 'react-dom'
import localStyle from './modal.module.css'

const $$parentEle = document.getElementById('root')
interface ModalProps extends PropsWithChildren<unknown> {
  isShow: boolean
  header?: React.ReactNode
  onClose: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  parentEle?: Element
}

function Modal(props: ModalProps): JSX.Element {
  const { isShow, header, onClose, parentEle } = props
  if (!isShow) return null
  return ReactDOM.createPortal(
    <>
      <div className={localStyle.mask} />
      <div className={localStyle.modalWrapper}>
        <div className={localStyle.header}>{header}</div>
        <div className={localStyle.content}>{props.children}</div>
        <div className={localStyle.closeWrapper} onClick={onClose}>
          <img src={image} alt="close" />
        </div>
      </div>
    </>,
    parentEle || $$parentEle
  )
}
Modal.defaultProps = {
  header: 'Modal Header',
  parentEle: document.getElementById('root'),
}
export default Modal
