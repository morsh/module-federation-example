import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoryWrapper } from './StoryWrapper';
import { Loader } from '../components/Loader/Loader';

export default {
  title: 'Example/Spinner',
  component: Loader,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = () => (
  <StoryWrapper>
    <Loader />
  </StoryWrapper>
);

export const Default = Template.bind({});
