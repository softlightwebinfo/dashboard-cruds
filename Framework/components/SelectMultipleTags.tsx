import React, { Component } from 'react';
import { useContextFilters } from '@context/contextFilters';
import { SelectMultipleTagsTProps, SelectMultipleTagsTState } from '@props/TSelectMultipleTagsProps';
import { Tag } from '@components/Tag';
import { Icon } from '@components/Icon';
import { ClickOutside } from '@components/ClickOutside';
import { Input } from '@components/Input';
import { DropdownMenu } from '@components/DropdownMenu';
import { ITTag } from '@app_types/TTag';

export const SelectMultipleTags = (props: SelectMultipleTagsTProps) => {
  const use = useContextFilters();
  return (
    <SelectMultipleTagsComponent
      {...props}
      onChange={(e) => {
        use.setValue && use.setValue(props.id, e, props.data);
      }}
    />
  );
};

export class SelectMultipleTagsComponent extends Component<SelectMultipleTagsTProps, SelectMultipleTagsTState> {
  public state: SelectMultipleTagsTState = {
    selects: {},
    value: '',
    open: false,
  };

  constructor(props) {
    super(props);
  }

  onSelectOption = (select) => {
    this.setState(
      (e) => ({
        selects: {
          ...e.selects,
          [select.id]: select,
        },
      }),
      () => {
        this.props.onChange && this.props.onChange(this.state.selects);
      }
    );
  };

  onToggleOpen = () => {
    this.setState((e) => ({ open: !e.open }));
  };

  private deleteTag(item: ITTag) {
    if (item.id in this.state.selects) delete this.state.selects[item.id];
    this.setState({ selects: this.state.selects }, () => {
      this.props.onChange && this.props.onChange(this.state.selects);
    });
  }

  get getOptions() {
    return Object.entries(this.state.selects);
  }

  onChangeInput = (e) => this.setState({ value: e.target.value });

  optionsFilter = (i) => {
    let isExist = !(i.id in this.state.selects);
    if (this.state.value) {
      isExist = isExist && i.label.toLowerCase().includes(this.state.value);
    }
    return isExist;
  };

  onClickOutside = () => this.state.open && this.setState({ open: false });

  render() {
    const { icon, placeholder, options } = this.props;
    const className = 'SelectMultipleTags';
    return (
      <ClickOutside className={className} onClickOutside={this.onClickOutside}>
        <Icon icon={icon} />
        <div className={'SelectMultipleTags__content'}>
          {this.getOptions.map(([id, item]) => (
            <Tag key={id} id={id} label={item.label} onClick={() => this.deleteTag(item)} />
          ))}
          <Input
            onChange={this.onChangeInput}
            value={this.state.value}
            placeholder={placeholder}
            onClick={this.onToggleOpen}
          />
          <DropdownMenu
            show={this.state.open}
            options={options.filter(this.optionsFilter)}
            onClick={this.onSelectOption}
          />
        </div>
      </ClickOutside>
    );
  }
}
