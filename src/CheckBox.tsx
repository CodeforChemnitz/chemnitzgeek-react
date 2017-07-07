import * as React from 'react';

export default function CheckBox(props: CheckBoxProps) {
  const id = 'checkbox-' + props.name + props.item.id;

  return (
    <div className="input-group fluid">
      <input
        type="checkbox"
        checked={props.item.checked}
        onChange={() => props.onChange(props.item.id)}
        id={id}
        tabIndex={0}
      />
      <label htmlFor={id}>{props.item.name}</label>
    </div>
  );
}

interface CheckBoxProps {
  item: Item;
  name: string;
  onChange: (sourceId: number) => void;
}

export interface Item {
  id: number;
  name: string;
  checked: boolean;
}
