import React, { useState, input } from 'react';
//import { TweenOneGroup } from 'rc-tween-one';
import { Tag, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const TagsComponent = props => {
  const initialTagValues = {
    tags: props.users.programs,
    inputVisible: false,
    inputValue: '',
  };

  const [state, setState] = useState(initialTagValues);

  const handleClose = removedTag => {
    const tags = state.tags.filter(tag => tag !== removedTag);
    setState({ tags });
  };

  const showInput = () => {
    setState({ inputVisible: true }, () => input.focus());
  };

  const handleInputChange = e => {
    setState({ inputValue: e.target.value });
  };

  const handleInputConfirm = () => {
    const { inputValue } = state;
    let { tags } = state;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    setState({
      tags,
      inputVisible: false,
      inputValue: '',
    });
  };

  const saveInputRef = input => {
    input = input;
  };

  const forMap = tag => {
    const tagElem = (
      <Tag
        closable
        color="magenta"
        onClose={e => {
          e.preventDefault();
          handleClose(tag);
        }}
      >
        {tag}
      </Tag>
    );
    return (
      <span key={tag} style={{ display: 'inline-block' }}>
        {tagElem}
      </span>
    );
  };

  const { inputVisible, inputValue } = state;

  return (
    <>
      <div style={{ marginBottom: 16 }}>
        {/* <TweenOneGroup
          enter={{
            scale: 0.8,
            opacity: 0,
            type: 'from',
            duration: 100,
            onComplete: e => {
              e.target.style = '';
            },
          }}
          leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
          appear={false}
        >
          {tagChild}
        </TweenOneGroup> */}
      </div>
      {inputVisible && (
        <Input
          ref={saveInputRef}
          type="text"
          size="small"
          style={{ width: 78 }}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      )}
      {!inputVisible && (
        <Tag onClick={showInput} className="site-tag-plus">
          <PlusOutlined /> Add Program
        </Tag>
      )}
    </>
  );
};

export default TagsComponent;
