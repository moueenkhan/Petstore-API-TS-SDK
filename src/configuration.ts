/**
 * Swagger PetstoreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { HttpClientOptions } from './core';
import { OAuthScopeEnum } from './models/oAuthScopeEnum';
import { OAuthToken } from './models/oAuthToken';

/** An interface for all configuration parameters required by the SDK. */
export interface Configuration {
  timeout: number;
  environment: Environment;
  oAuthClientId: string;
  oAuthRedirectUri: string;
  oAuthToken?: OAuthToken;
  oAuthScopes?: OAuthScopeEnum[];
  httpClientOptions?: Partial<HttpClientOptions>;
  unstable_httpClientOptions?: any;
}

/** Environments available for API */
export enum Environment {
  Production = 'production',
}
