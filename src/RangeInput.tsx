import * as React from 'react';

export default function RangeInput(props: RangeInputProps) {
  const id = 'rangeinput-' + props.name;

  return(
    <div className="input-group">
      <label htmlFor={id}>{props.name}</label>
      <div id={id}>
        <input
          name="min"
          type="number"
          min={props.min}
          max={props.value[1]}
          value={props.value[0]}
          step={props.step}
          disabled={props.disabled}
          onChange={props.onChange}
          size={1}
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
          size={1}
        />
      </div>
    </div>
  );
}

interface RangeInputProps {
  min: number;
  max: number;
  value: [number, number];
  step: number;
  name: string;
  disabled?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
