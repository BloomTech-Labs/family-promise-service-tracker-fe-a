// This component renders the dummy info during the Pop-up on Click
import * as React from 'react';

function CityInfo(props) {
  const { info } = props;
  const displayName = `${info.title}, ${info.body}`;

  return (
    <div>
      <div>
        {displayName} |{' '}
        <a
          target="_new"
          href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${displayName}`}
        >
          Wikipedia
        </a>
      </div>
      <img
        width={240}
        src={info.image}
        alt="image of city we are gathering data from"
      />
    </div>
  );
}

export default React.memo(CityInfo);
