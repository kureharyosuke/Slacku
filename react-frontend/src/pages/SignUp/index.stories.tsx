import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import SignUp from './index';

export default {
  component: SignUp,
  title: 'pages/SignUp',
} as Meta;

// type Props = React.ComponentProps<typeof SignUp>;

// const Template: Story<Props> = (args) => {
//   return <SignUp {...args} />;
// };

const Template: Story = (args) => {
  return <SignUp {...args} />;
};

export const Example = Template.bind({});

Example.args = {};
