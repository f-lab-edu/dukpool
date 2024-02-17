export type ModalProps = {
  onSubmit?: <T>(type: T) => void;
  onAbort?: <T>(type: T) => void;
};
