import { useCallback, useState } from "react";
import { Avatar } from "../Avatar";
import { AvatarModal } from "../AvatarModal";

export const AvatarWrapper = () => {
  const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);

  const openAvatarModal = useCallback(() => {
    setIsAvatarModalOpen(true);
  }, []);

  return (
    <>
      <Avatar openAvatarModal={openAvatarModal} />

      {isAvatarModalOpen && <AvatarModal />}
    </>
  );
};
