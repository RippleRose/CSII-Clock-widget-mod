import { ModRegistrar } from "cs2/modding";
import { ClockButton, ClockButtonCmp } from "mods/clock-button";

const register: ModRegistrar = (moduleRegistry) => {
    //moduleRegistry.extend("game-ui/game/components/toolbar/top/toggles.tsx", "PhotoModeToggle", ClockButton);
    moduleRegistry.extend(
        "game-ui/game/components/toolbar/bottom/happiness-field/happiness-field.tsx",
        "HappinessField",
        ClockButton
    )
    //moduleRegistry.append("GameTopRight", ClockButtonCmp);
}

export default register;