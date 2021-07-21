import React, { useEffect, useState } from 'react';
import TitleComponent from '../../common/Title';
import { axiosWithAuth } from '../../../utils/axiosWithAuth';
import RenderRecommendationsPage from './RenderRecommendationsPage';

function RecommendationsContainer() {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('/recommendations')
      .then(res => {
        setRecommendations(res.data);
      });
  }, []);

  return (
    <div style={{ margin: '0 auto' }}>
      <div className="sub-header">
        <TitleComponent TitleText="Recommendations" />
      </div>
      {/* {recommendations.map((recommendation, idx) => {
        return 
          <RenderRecommendationsPage key={idx} values={recommendation} />})
        } */}
    </div>
  );
}

export default RecommendationsContainer;
