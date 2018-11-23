import * as React from "react";


export default class CalendarView extends React.Component {
  public render() {
    const generatedOuput = this.generateCalanderForThisMonth(new Date());

    return (
      <div className="calander-view">
        <div className="row calander-view__headers">
        <div className="d-none d-lg-block col">Sunday</div>
          <div className="d-none d-lg-block col">Monday</div>
          <div className="d-none d-lg-block col">Tuesday</div>
          <div className="d-none d-lg-block col">Wednesday</div>
          <div className="d-none d-lg-block col">Thursday</div>
          <div className="d-none d-lg-block col">Friday</div>
          <div className="d-none d-lg-block col">Saturday</div>

          <div className="col d-lg-none">Sun</div>
          <div className="col d-lg-none">Mon</div>
          <div className="col d-lg-none">Tue</div>
          <div className="col d-lg-none">Wed</div>
          <div className="col d-lg-none">Thu</div>
          <div className="col d-lg-none">Fri</div>
          <div className="col d-lg-none">Sat</div>
        </div>
        {generatedOuput}
      </div>
    );
  }
  public onClick=(event: React.MouseEvent<HTMLElement>)=>{
    console.log(event)
};

  private generateCalanderForThisMonth(selectedDate: Date): any {
    const y = selectedDate.getFullYear();
    const m = selectedDate.getMonth();
    const firstDay = new Date(y, m, 1);
    const dayOfWeek = firstDay.getDay();

    let displayDate;
    if (dayOfWeek === 0) {
      displayDate = new Date(y, m, -8);
    } else {
      displayDate = new Date(y, m, -dayOfWeek + 1);
    }
    const rows = [];
    for (let row = 0; row < 6; row++) {
      const days = [];
      for (let day = 0; day < 7; day++) {
        const monthStyle = displayDate.getMonth() === m ? "calander-view__current-day" : "";
        days.push(
          <div key={displayDate.toISOString()}className={"col calander-view__day " + monthStyle}>{displayDate.getDate()}</div>
        );
        displayDate.setDate(displayDate.getDate() + 1);
      }

      rows.push(<div key={row} className="row">{days}</div>);
    }
    return rows;
  }
}