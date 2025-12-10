const prefs = new Map();
let defaultThemeId = null;

export default {
    set: (userId, themeId) => prefs.set(userId, themeId),
    get: userId => prefs.get(userId),
    setDefault: themeId => {
        defaultThemeId = themeId;
        return defaultThemeId;
    },
    getDefault: () => defaultThemeId
};