import React, { Component } from 'react';
import { ContextFilters } from '@context/contextFilters';
import { IDropdownMenuPropsOption } from '@props/TDropdownMenuProps';
import { FilterContainerProps, FilterContainerState } from '@props/FilterContainerProps';
import { SelectMultipleTags } from '@components/SelectMultipleTags';

export class FilterContainer extends Component<FilterContainerProps, FilterContainerState> {
  public state: FilterContainerState = {
    selects: {},
  };

  constructor(props) {
    super(props);
  }

  setValue = (id, item, data) => {
    const itemData = {
      item,
      data,
    };
    this.setState(
      (e: any) => ({
        selects: {
          ...e.selects,
          [id]: itemData,
        },
      }),
      () => {
        this.props.onChange(this.state.selects, itemData, id);
      }
    );
  };

  render() {
    const context = {
      values: this.state.selects,
      setValue: this.setValue,
    };
    return (
      <ContextFilters.Provider value={context}>
        {this.props.options.map((item) => (
          <SelectMultipleTags
            key={item.id}
            id={item.id}
            icon={item.icon}
            placeholder={item.placeholder}
            data={item}
            options={item.options as IDropdownMenuPropsOption[]}
          />
        ))}
      </ContextFilters.Provider>
    );
  }
}
