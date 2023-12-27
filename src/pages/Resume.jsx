/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext } from 'react';
import { MdBusinessCenter } from 'react-icons/md';
import { PiStudentFill } from 'react-icons/pi';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ThemeContext } from 'styled-components';
import FallbackSpinner from '../components/FallbackSpinner';
import useEndpoint from '../components/useEndpoint';
import '../css/experience.css';

const resolveCardType = (type, theme) => {
  let Icon = null;
  let cardBg = null;

  switch (type) {
    case 'work':
      Icon = MdBusinessCenter;
      cardBg = theme.accentColor;
      break;
    case 'study':
      Icon = PiStudentFill;
      cardBg = 'pink';
      break;
    default:
      Icon = MdBusinessCenter;
      cardBg = theme.accentColor;
      break;
  }
  return { Icon, cardBg };
};

function Resume() {
  const theme = useContext(ThemeContext);
  const { data } = useEndpoint('resume');

  if (!data) return <FallbackSpinner />;

  return (
    <VerticalTimeline>
      {data.map((item) => {
        const { Icon, cardBg } = resolveCardType(item.type, theme);
        return (
          <VerticalTimelineElement
            key={item.name}
            className="vertical-timeline-element--work"
            contentStyle={{ background: cardBg, color: theme.color }}
            contentArrowStyle={{
              borderRight: `7px solid  ${cardBg}`,
            }}
            date={item.date}
            iconStyle={{ background: cardBg, color: theme.color }}
            icon={<Icon />}
          >
            <h3 className="vertical-timeline-element-title">{item.name}</h3>
            <h5 className="vertical-timeline-element-subtitle">{item.place}</h5>
            <br />
            {item.roles.map((role) => (
              <div key={`${item.name}-${role.title}`}>
                <h3>{role.title}</h3>
                {role.occupation && <h5>{role.occupation}</h5>}
                <ul>
                  {role.descriptions.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </VerticalTimelineElement>
        );
      })}

      <VerticalTimelineElement
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        // icon={<StarIcon />}
      />
    </VerticalTimeline>
  );
}

export default Resume;
