import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons";

export default function DisplayModeButton() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon
      variant="outline"
      color={colorScheme === "dark" ? "yellow" : "blue"}
      onClick={toggleColorScheme}
      size="lg"
      title="Toggle color scheme"
    >
      {colorScheme === "dark" ? <IconSun size={18} /> : <IconMoonStars size={18} />}
    </ActionIcon>
  );
}
