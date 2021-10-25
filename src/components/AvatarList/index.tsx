import { Container, ScrollList, AvatarButton, AvatarIcon } from "./styles";
import { avatarNames } from "./avatarNames";

interface IAvatarListProps {
  currentAvatar: string;
  toggleAvatar: (avatar: string) => void;
}

export const AvatarList = ({
  currentAvatar,
  toggleAvatar,
}: IAvatarListProps) => {
  console.log(currentAvatar);

  return (
    <Container>
      <ScrollList>
        {avatarNames.map((avatarName, index) => (
          <AvatarButton key={index} onClick={() => toggleAvatar(avatarName)}>
            <AvatarIcon
              src={require(`../../assets/${avatarName}.svg`).default}
              $isSelected={currentAvatar === avatarName}
            />
          </AvatarButton>
        ))}
      </ScrollList>
    </Container>
  );
};
