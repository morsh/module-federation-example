import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Loader } from '../components/Loader/Loader';
import { StoryWrapper } from './StoryWrapper';

const LoaderStory = {
  title: 'Example/Spinner',
  component: Loader,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Loader>;

export default LoaderStory;

const Template: ComponentStory<typeof Loader> = () => (
  <StoryWrapper>
    <Loader />
  </StoryWrapper>
);

export const Default = Template.bind({});
