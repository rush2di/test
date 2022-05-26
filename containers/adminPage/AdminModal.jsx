import ModalWrapper from "components/ModalWrapper";
import { handleSubmit } from "components/Forms/Admin/utils";
import { AdminForm } from "components/Forms";
import {
  _DEFAULT_VALIDATION_SCHEMA,
  _DEFAULT_VALUES,
} from "components/Forms/Admin/constants";

const AdminModal = ({ isModelOpen, handleClose }) => {
  const initialValues = { ..._DEFAULT_VALUES };

  const validationSchema = _DEFAULT_VALIDATION_SCHEMA;

  return (
    <ModalWrapper isOpen={isModelOpen} handleClick={handleClose}>
      <AdminForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      />
    </ModalWrapper>
  );
};

export default AdminModal;
