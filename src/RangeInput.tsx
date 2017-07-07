import * as React from 'react';

export default function RangeInput(props: RangeInputProps) {
  return(
    <div>
      <input
        type="number"
        min={props.min}
        max={props.max}
        value={props.value[0]}
        step={props.step}
        disabled={props.disabled}
        onChange={props.onChange}
      />
      <input
        type="number"
        min={props.min}
        max={props.max}
        value={props.value[1]}
        step={props.step}
        disabled={props.disabled}
        onChange={props.onChange}
      />
    </div>
  );
}

interface RangeInputProps {
  min: number;
  max: number;
  value: [number, number];
  step: number;
  disabled?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
