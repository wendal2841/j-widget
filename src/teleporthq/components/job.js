import React from 'react'

import PropTypes from 'prop-types'

import './job.css'

const Job = (props) => {
  return (
    <div className={`job-container ${props.rootClassName} `}>
      <div className="job-vacancies">
        <div className="job-frame4">
          <div className="job-jobinfo">
            <div className="job-top">
              <div className="job-title-new">
                <span className="job-text MobileH3">
                  <span>Accounting Manager</span>
                </span>
              </div>
              <span className="job-text02">
                <span>$85k – $100k</span>
              </span>
            </div>
            <span className="job-text04 ParagraphP14">
              <span>
                The staff accountant&apos;s responsibilities include maintaining
                financial records and ...
              </span>
            </span>
          </div>
          <div className="job-company">
            <div className="job-companyinfo">
              <span className="job-text06">
                <span>Clean Krew LLC</span>
              </span>
              <div className="job-address">
                <div className="job-mapmarker">
                  <img
                    alt="Subtract1516"
                    src="/playground_assets/Subtract1516-tup8.svg"
                    className="job-subtract"
                  />
                </div>
                <span className="job-text08 ParagraphP14">
                  <span>New York, NY</span>
                </span>
              </div>
              <div className="job-date">
                <div className="job-clockfilled">
                  <img
                    alt="SubtractI152"
                    src="/playground_assets/SubtractI152-dv7d.svg"
                    className="job-subtract1"
                  />
                </div>
                <span className="job-text10 ParagraphP14">
                  <span>2 hours ago</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Job.defaultProps = {
  rootClassName: '',
}

Job.propTypes = {
  rootClassName: PropTypes.string,
}

export default Job
