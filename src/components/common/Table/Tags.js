import React, { useState } from 'react';
import { Tag } from 'antd';

const TagsComponent = props => {
  const tagData = ['Prevention', 'Sheltering', 'Aftercare'];
  const { CheckableTag } = Tag;

  const initialTagValues = {
    selectedTags: props.users.programs,
  };

  const [selected, setSelected] = useState(initialTagValues);

  const handleSelected = (tag, checked) => {
    const { selectedTags } = selected;
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter(t => t !== tag);
    setSelected({ selectedTags: nextSelectedTags });
  };

  const { selectedTags } = selected;

  return (
    <>
      {tagData.map(tag => (
        <CheckableTag
          key={tag}
          checked={selectedTags.indexOf(tag) > -1}
          onChange={checked => handleSelected(tag, checked)}
        >
          {tag}
        </CheckableTag>
      ))}
    </>
  );
};

export default TagsComponent;
