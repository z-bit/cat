import { InjectionToken } from '@angular/core';

export interface AppConfig {
  careApiUrl: string;
}

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: AppConfig = {
  careApiUrl: 'http://web011/api/cat/v1/public'
};

