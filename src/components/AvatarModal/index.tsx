import { useCallback, useEffect, useRef, useState } from "react";
import { useTheme } from "styled-components";

import { Button } from "../Button";
import { AvatarList } from "../AvatarList";

import { useUser } from "../../hooks/useUser";

import { Container, Title } from "./styles";

interface IAvatarModalProps {
  closeAvatarModal: () => void;
}

export const AvatarModal = ({ closeAvatarModal }: IAvatarModalProps) => {
  const theme = useTheme();
  const { setAvatarSrc } = useUser();

  const modalWrapper = useRef<HTMLDivElement>(null);
  const [currentAvatar, setCurrentAvatar] = useState("");

  const handleConfirmation = useCallback(() => {
    if (currentAvatar) {
      setAvatarSrc(currentAvatar);
    }
    closeAvatarModal();
  }, [closeAvatarModal, currentAvatar, setAvatarSrc]);

  const handleOutsideClick = useCallback(
    (e: MouseEvent) => {
      if (!modalWrapper.current?.contains(e.target as Node)) {
        closeAvatarModal();
      }
    },
    [closeAvatarModal]
  );

  const handleEscapeKey = useCallback(
    (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") {
        closeAvatarModal();
      }
    },
    [closeAvatarModal]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [handleOutsideClick]);

  useEffect(() => {
    document.addEventListener("keydown", handleEscapeKey);

    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [handleEscapeKey, handleOutsideClick]);

  return (
    <Container ref={modalWrapper}>
      <Title>Avatar</Title>

      <AvatarList
        toggleAvatar={setCurrentAvatar}
        currentAvatar={currentAvatar}
      />

      <Button
        label="Confirmar"
        bgColor={theme.colors.background}
        bgColorActive={theme.colors.backgroundPlus}
        onClick={handleConfirmation}
      />
    </Container>
  );
};
