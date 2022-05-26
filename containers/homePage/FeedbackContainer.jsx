import { FeedbackCard } from 'components/Cards';
import SectionTitle from 'components/SectionTitle';

const FeedbackContainer = () => {
  return (
    <div className="my-5 my-sm-3 pb-3">
      <div className="container">
        <SectionTitle subtitle={`Testimonials`} title={`Clients Feedback`} />
        <div className="row mt-3">
          <div className="col-4 col-sm-6 col-xsm-12">
            <FeedbackCard 
              imgSrc={`https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-02.jpg`}
              role={`Founder, henrix`}
              fullname={`Colin Hagelund`}
              text={`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.`}
            />
          </div>
          <div className="col-4 col-sm-6 col-xsm-12">
            <FeedbackCard 
              imgSrc={`https://kottke.org/plus/misc/images/ai-faces-01.jpg`}
              role={`Chemist, Pacific Stereo`}
              fullname={`Elida Østenstad`}
              text={`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.`}
            />
          </div>
          <div className="col-4 col-sm-6 col-xsm-12">
            <FeedbackCard 
              imgSrc={`https://preview.redd.it/lfhc7v6d3jq51.jpg?width=640&crop=smart&auto=webp&s=03612aaa44f8b0ba4f728a8515cd394077a0f331`}
              role={`CTO, Sure Save`}
              fullname={`Selma Williams`}
              text={`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedbackContainer