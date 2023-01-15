import React from 'react';
import { useTranslation } from 'react-i18next';
// import { title } from './Title.scss';

export const Title = () => {
  const { t } = useTranslation();
  return <h1>{t('title')}</h1>;
};