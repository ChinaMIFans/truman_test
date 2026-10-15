const dotenv = require('dotenv');
dotenv.config({ path: '.env' });

const DEFAULTS = {
    prompt: '您确定要分享这个内容吗？',
    delaySeconds: 5,
    autoAction: 'share',
    modalTitle: '转发帖子',
    confirmText: '立即转发',
    cancelText: '取消',
    countdownTemplate: '（{seconds}秒后将自动{action}）'
};

const configuredDelay = Number.parseInt(process.env.SHARE_DELAY_SECONDS, 10);
const configuredAction = String(process.env.SHARE_AUTO_ACTION || DEFAULTS.autoAction).toLowerCase();
const autoAction = ['share', 'cancel', 'none'].includes(configuredAction) ? configuredAction : DEFAULTS.autoAction;
const delaySeconds = Number.isFinite(configuredDelay) && configuredDelay >= 0 ? configuredDelay : DEFAULTS.delaySeconds;
const actionText = autoAction === 'cancel' ? '取消' : '分享';
const countdownTemplate = process.env.SHARE_COUNTDOWN_TEMPLATE || DEFAULTS.countdownTemplate;

module.exports = {
    sharePrompt: process.env.SHARE_PROMPT || DEFAULTS.prompt,
    shareDelaySeconds: delaySeconds,
    shareAutoAction: autoAction,
    shareActionText: actionText,
    shareModalTitle: process.env.SHARE_MODAL_TITLE || DEFAULTS.modalTitle,
    shareConfirmText: process.env.SHARE_CONFIRM_TEXT || DEFAULTS.confirmText,
    shareCancelText: process.env.SHARE_CANCEL_TEXT || DEFAULTS.cancelText,
    shareCountdownTemplate: countdownTemplate
};
