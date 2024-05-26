import { FC } from 'react';

interface TagListProps {
  tags: string[],
  selectedTag: string,
  onClick: (tag: string) => void,
}

const TagList: FC<TagListProps> = ({ tags, selectedTag, onClick }) => {
  return (
    <div className='tag-list'>
      {tags.map(tag => 
        <div 
          className={`tag-item ${selectedTag === tag && 'tag-item_active'}`} 
          key={tag} 
          onClick={() => onClick(tag)}
        >
          {tag}
        </div>
      )}
    </div>
  );
}

export default TagList;
