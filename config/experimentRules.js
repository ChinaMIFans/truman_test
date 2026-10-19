// Edit this table in code to define the behavior of each experiment group.
// Group names must match EXP_CONDITIONS_NAMES in .env exactly.
// sharePopup: true shows the confirmation modal; false shares immediately.
// showCommunityRules: false skips the community-rules page for that group.
const CONDITION_RULES = {
    1: { sharePopup: false, showCommunityRules: false },
    2: { sharePopup: true, showCommunityRules: false },
    3: { sharePopup: false, showCommunityRules: true },
    4: { sharePopup: true, showCommunityRules: true },
};

const DEFAULT_RULES = Object.freeze({
    showSharePopup: true,
    showCommunityRules: true
});

function getConditionNames() {
    return String(process.env.EXP_CONDITIONS_NAMES || '')
        .split(',')
        .map(name => name.trim())
        .filter(Boolean);
}

function getAllConditionRules() {
    const names = getConditionNames();
    return Object.fromEntries(names.map(name => {
        const item = CONDITION_RULES[name] || {};
        return [name, {
            showSharePopup: item.sharePopup ?? DEFAULT_RULES.showSharePopup,
            showCommunityRules: item.showCommunityRules ?? DEFAULT_RULES.showCommunityRules
        }];
    }));
}

function getRulesForCondition(condition) {
    const allRules = getAllConditionRules();
    return allRules[condition] || { ...DEFAULT_RULES };
}

module.exports = { getConditionNames, getAllConditionRules, getRulesForCondition };
