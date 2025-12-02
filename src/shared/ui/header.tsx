import { PersonalProfile } from "@widgets/personal-profile";

export const Header = () => {
  return (
    <header className="flex justify-between items-center h-[60px] border border-border borderr p-4">
      <p></p>
      <PersonalProfile />
    </header>
  );
};
