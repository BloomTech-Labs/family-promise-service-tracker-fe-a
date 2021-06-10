import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  getAllProgramsAction,
  getProgramByIdAction,
} from '../../../state/actions/programActions';
import { Select } from 'antd';

const MetricsFilterBar = ({ getAllProgramsAction, getProgramByIdAction }) => {
  const [receivedPrograms, setReceivedPrograms] = useState(false);

  const { Option } = Select;

  function onChange(value) {}

  function onBlur() {}

  function onFocus() {
    setReceivedPrograms(!receivedPrograms);
  }

  function onSearch(value) {}

  return (
    <div>
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="-Select Program-"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option value="Program1">Program1</Option>
        <Option value="Program2">Program2</Option>
        <Option value="Program">Program3</Option>
      </Select>

      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="-Select Service Type-"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option value="Service Type1">Service Type1</Option>
        <Option value="Service Type2">Service Type2</Option>
        <Option value="Service Type3">Service Type3</Option>
      </Select>

      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="-Select Service Provider-"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option value="Service Provider1">Service Provider1</Option>
        <Option value="Service Provider2">Service Provider2</Option>
        <Option value="Service Provider3">Service Provider3</Option>
      </Select>

      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="-Select Recipients-"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option value="Recipient1">Recipient1</Option>
        <Option value="Recipient2">Recipient2</Option>
        <Option value="Recipient3">Recipient3</Option>
      </Select>
    </div>
  );
};

export default connect(null, { getAllProgramsAction, getProgramByIdAction })(
  MetricsFilterBar
);
