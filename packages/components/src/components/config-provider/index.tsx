import * as React from 'react';

export interface ConfigConsumerProps {
  getPrefixCls: (suffixCls: string, customizePrefixCls?: string) => string;
}

export const ConfigContext = React.createContext<ConfigConsumerProps>({
  // We provide a default function for Context without provider
  getPrefixCls: (suffixCls: string, customizePrefixCls?: string) => {
    if (customizePrefixCls) return customizePrefixCls;

    return `gio-${suffixCls}`;
  },
});
