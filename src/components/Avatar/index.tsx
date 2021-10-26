import { Container, IconImage, PencilWrapper, IconPencil } from "./styles";

import pencilIcon from "../../assets/icon-pencil.svg";
import { useUser } from "../../hooks/useUser";

interface IAvatarProps {
  openAvatarModal: () => void;
}

export const Avatar = ({ openAvatarModal }: IAvatarProps) => {
  const { avatarSrc } = useUser();

  return (
    <Container>
      <IconImage
        src={require(`../../assets/${avatarSrc ?? "icon-1"}.svg`).default}
      />

      <PencilWrapper onClick={openAvatarModal} type="button">
        <IconPencil src={pencilIcon} />
      </PencilWrapper>
    </Container>
  );
};
