import { Modal } from 'react-bootstrap';
import 'src/Styles/Components/Modals.scss';

interface IModalWrapper {
  className?: string;
  active: boolean;
  setActive: () => void;
  bodyContent: React.ReactNode;
  headerContent?: React.ReactNode;
}

const ModalWrapper: React.FC<IModalWrapper> = ({
  headerContent,
  bodyContent,
  active,
  setActive,
  className
}) => {
  return (
    <Modal className={className ?? ''} show={active} onHide={setActive} centered>
      {!!headerContent && <Modal.Header closeButton>{headerContent}</Modal.Header>}
      {!!bodyContent && <Modal.Body>{bodyContent}</Modal.Body>}
    </Modal>
  );
};

export default ModalWrapper;
