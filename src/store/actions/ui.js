export const CHANGE_STATUS_BAR = 'UI_CHANGE_STATUS_BAR';

export function changeStatusBar(color, contentStyle) {
  return {
    type: CHANGE_STATUS_BAR,
    color,
    contentStyle,
  };
}
