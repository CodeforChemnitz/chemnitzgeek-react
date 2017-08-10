import * as React from 'react';
import CheckBox, {Item} from './CheckBox';

export default class CheckBoxGroup extends React.PureComponent<CheckBoxGroupProps, {}> {
  render() {
    const props = this.props;
    const items = props.items.map((item, index) => (
      <CheckBox
        key={index}
        item={item}
        name={props.name}
        onChange={(newItem: Item) => props.onChange(
          props.items.slice(0, index).concat([newItem]).concat(props.items.slice(index + 1))
        )}
      />
    ));

    return (
      <div className="col-sm-12">
        <fieldset>
          <div>
            <legend>{props.name}</legend>
            {items}
          </div>
        </fieldset>
      </div>
    );
  }
}

interface CheckBoxGroupProps {
  items: Item[];
  name: string;
  onChange: (item: Item[]) => void;
}
