import * as React from 'react';

export default function RangeInput(props: RangeInputProps) {
  return(
    <div className="input-group fluid">
      <input
        name="min"
        type="number"
        min={props.min}
        max={props.value[1]}
        value={props.value[0]}
        step={props.step}
        disabled={props.disabled}
        onChange={props.onChange}
      />
      <input
        name="max"
        type="number"
        min={props.value[0]}
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
