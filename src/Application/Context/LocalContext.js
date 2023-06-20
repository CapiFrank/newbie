import { createContext, useContext, useState } from "react";
const openContext = createContext();

export function useLocalContext() {
    return useContext(openContext);
}
export function LocalContext({ children }) {
    const [open, setOpen] = useState(false);
    const state = { repeat: 0, once: 1, norepeat: 2 };
    const [preference, setPreference] = useState(state.norepeat);
    const [randomize, setRandom] = useState(false);
    const [mode, setMode] = useState(true);
    const [volume, setVolume] = useState(0.5);
    const [progress, setProgress] = useState(0);
    const prop = {
        sidebar: [open, setOpen],
        repeat: [preference, setPreference],
        random: [randomize, setRandom],
        play: [mode, setMode],
        volume: [volume, setVolume],
        progress: [progress, setProgress],
        state: [state]
    }
    return (
        <openContext.Provider value={prop}>
            {children}
        </openContext.Provider>
    );
}