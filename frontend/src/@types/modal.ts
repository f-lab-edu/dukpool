export type ModalProps = {
  onSubmit?: <T>(type: T) => void;
  onAbort?: (type: Error) => void;
};
