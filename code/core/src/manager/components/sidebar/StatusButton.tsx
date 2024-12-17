import { IconButton } from '@storybook/core/components';
import { styled } from '@storybook/core/theming';
import type { API_StatusValue } from '@storybook/types';

import type { Theme } from '@emotion/react';
import { darken, lighten, transparentize } from 'polished';

const withStatusColor = ({ theme, status }: { theme: Theme; status: API_StatusValue }) => {
  const defaultColor =
    theme.base === 'light'
      ? transparentize(0.3, theme.color.defaultText)
      : transparentize(0.6, theme.color.defaultText);

  return {
    color: {
      pending: defaultColor,
      success: theme.color.positive,
      error: theme.color.negative,
      warn: theme.color.warning,
      unknown: defaultColor,
    }[status],
  };
};

export const StatusLabel = styled.div<{ status: API_StatusValue }>(withStatusColor, {
  margin: 3,
});

export const StatusButton = styled(IconButton)<{
  height?: number;
  width?: number;
  status: API_StatusValue;
  selectedItem?: boolean;
}>(
  withStatusColor,
  ({ theme, height, width }) => ({
    transition: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: width || 28,
    height: height || 28,
    background: 'var(--tree-node-background-hover)',
    boxShadow: '0 0 5px 5px var(--tree-node-background-hover)',

    '&:hover': {
      color: theme.color.secondary,
      background:
        theme.base === 'dark'
          ? darken(0.3, theme.color.secondary)
          : lighten(0.4, theme.color.secondary),
    },

    '[data-selected="true"] &': {
      background: theme.color.secondary,
      boxShadow: `0 0 5px 5px ${theme.color.secondary}`,

      '&:hover': {
        background: lighten(0.1, theme.color.secondary),
      },
    },

    '&:focus': {
      color: theme.color.secondary,
      borderColor: theme.color.secondary,

      '&:not(:focus-visible)': {
        borderColor: 'transparent',
      },
    },
  }),
  ({ theme, selectedItem }) =>
    selectedItem && {
      '&:hover': {
        boxShadow: `inset 0 0 0 2px ${theme.color.secondary}`,
        background: 'rgba(255, 255, 255, 0.2)',
      },
    }
);
