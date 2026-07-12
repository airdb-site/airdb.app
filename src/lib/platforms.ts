export type Platform = 'ios' | 'android' | 'miniprogram' | 'web' | 'agent';

export const PLATFORMS: Record<Platform, { label: string; short: string; color: string }> = {
  ios: { label: 'iOS App', short: 'iOS', color: 'var(--color-plat-ios)' },
  android: { label: 'Android App', short: 'Android', color: 'var(--color-plat-android)' },
  miniprogram: { label: '微信小程序', short: '小程序', color: 'var(--color-plat-mini)' },
  web: { label: 'Web 应用', short: 'Web', color: 'var(--color-plat-web)' },
  agent: { label: 'Agent 应用', short: 'Agent', color: 'var(--color-plat-agent)' },
};

export const STATUS: Record<'online' | 'beta' | 'dev', { label: string; className: string }> = {
  online: { label: '已上线', className: 'status-online' },
  beta: { label: '内测中', className: 'status-beta' },
  dev: { label: '开发中', className: 'status-dev' },
};

export const PLATFORM_ORDER: Platform[] = ['miniprogram', 'ios', 'android', 'web', 'agent'];
