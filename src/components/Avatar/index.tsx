import { Container, IconImage, PencilWrapper, IconPencil } from "./styles";

import avatarIcon from "../../assets/icon-1.svg";
import pencilIcon from "../../assets/icon-pencil.svg";

interface IAvatarProps {
  openAvatarModal: () => void;
}

export const Avatar = ({ openAvatarModal }: IAvatarProps) => {
  return (
    <Container>
      <IconImage src={avatarIcon} />

      <PencilWrapper onClick={openAvatarModal}>
        <IconPencil src={pencilIcon} />
      </PencilWrapper>
    </Container>
  );
};
