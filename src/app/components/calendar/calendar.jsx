import React from 'react';
import { RenderCalendar } from './components/render_calendar'

export default function Calendar(props) {

    let obj = JSON.parse(props.match.params.id);

    return <RenderCalendar id={obj.id} type={obj.type} />
}