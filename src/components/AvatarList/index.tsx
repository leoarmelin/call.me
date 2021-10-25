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
  return (
    <Container>
      <ScrollList>
        {avatarNames.map((avatarName, index) => (
          <AvatarButton
            key={index}
            onClick={() => toggleAvatar(avatarName)}
            $isSelected={currentAvatar === avatarName}
          >
            <AvatarIcon
              src={require(`../../assets/${avatarName}.svg`).default}
            />
          </AvatarButton>
        ))}
      </ScrollList>
    </Container>
  );
};
