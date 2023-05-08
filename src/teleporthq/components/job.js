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
                <span className="job-text MobileH3">Hi MF!!</span>
              </div>
              <span className="job-text01">$85k – $500k</span>
            </div>
            <span className="job-text02 ParagraphP14">
              <span>
                The staff accountant&apos;s responsibilities include maintaining
                financial records and ...
              </span>
            </span>
          </div>
          <div className="job-company">
            <div className="job-companyinfo">
              <span className="job-text04">
                <span>Clean Krew LLC</span>
              </span>
              <div className="job-address">
                <span className="job-text06 ParagraphP14">
                  <span>New York, NY</span>
                </span>
              </div>
              <div className="job-date">
                <span className="job-text08 ParagraphP14">
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
