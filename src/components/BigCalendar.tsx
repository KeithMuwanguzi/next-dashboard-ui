"use client";
import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar'
import moment from 'moment'
import { calendarEvents } from '@/lib/data'
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from 'react';

const localizer = momentLocalizer(moment)
const BigCalendar = () => {
  const [view, setView] = useState(Views.WORK_WEEK);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  }

    return (
        <div>
            <div className="">
                <h1 className="text-sm font-semibold p-4">
                    Schedule(4A)
                </h1>
            </div>
            <Calendar
                localizer={localizer}
                events={calendarEvents}
            startAccessor="start"
            endAccessor="end"
            views={["work_week","day"]}
            view={view}
            style={{ height: "98%" }}
            onView={handleOnChangeView}
            min={new Date(2025, 0, 5, 8, 0)}
            max={new Date(2025, 0, 10, 18, 0)}
            />
        </div>
    )
}

export default BigCalendar
