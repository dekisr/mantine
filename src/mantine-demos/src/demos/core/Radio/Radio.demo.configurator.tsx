import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { RadioProps, Radio, Group } from '@mantine/core';

const codeTemplate = (props: string) => `
import { Radio } from '@mantine/core';

function Demo() {
  return (
    <Radio
     ${props}
    />
  );
}
`;

function Wrapper(props: RadioProps) {
  return (
    <Group position="center">
      <Radio value="react" label="Radio button" {...props} />
    </Group>
  );
}

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configuratorProps: {
    multiline: 3,
  },
  configurator: [
    {
      name: 'labelPosition',
      type: 'segmented',
      data: [
        { value: 'right', label: 'Right' },
        { value: 'left', label: 'Left' },
      ],
      initialValue: 'right',
      defaultValue: 'right',
    },
    { name: 'label', type: 'string', initialValue: 'I agree to sell my privacy' },
    { name: 'description', type: 'string', initialValue: '' },
    { name: 'error', type: 'string', initialValue: '' },
    { name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
    { name: 'checked', type: 'boolean', initialValue: false, defaultValue: false },
  ],
};
