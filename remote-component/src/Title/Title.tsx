import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  background-color: blue;
`

export const Title = () => {
  const { t } = useTranslation();
  return <StyledTitle>{t('title')}</StyledTitle>;
};