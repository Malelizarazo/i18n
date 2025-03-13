import React, { useState } from "react";
import Job from "./job";
import { FormattedMessage, useIntl } from "react-intl";
import "./jobslist.css";

const JobsList = () => {
  const intl = useIntl();
  const isSpanish = intl.locale.startsWith('es');
  
  const [offers] = useState([
    {
      id: "0001",
      name: <FormattedMessage id="Name" />,
      company: "Schneider Electric",
      salary: 4.5,
      city: "Bogotá, Colombia",
      date: "2019-03-26",
      visits: 1000,
    },
    {
      id: "0002",
      name: <FormattedMessage id="SoftwareEngineer" defaultMessage="Software Engineer" />,
      company: "Google Inc.",
      salary: 20,
      city: "Palo Alto, CA, USA",
      date: "2019-03-27",
      visits: 52000,
    },
    {
      id: "0003",
      name: <FormattedMessage id="Nurse" defaultMessage="Nurse" />,
      company: "Clínica La Aurora",
      salary: 1,
      city: "Cali, Colombia",
      date: "2019-03-28",
      visits: 800,
    },
  ]);

  return (
    <div>
      <table className="table">
        <thead className={isSpanish ? "thead-light" : "thead-dark"}>
          <tr>
            <th scope="col">#</th>
            <th scope="col"><FormattedMessage id="Position" /></th>
            <th scope="col"><FormattedMessage id="Company" /></th>
            <th scope="col"><FormattedMessage id="Salary" /></th>
            <th scope="col"><FormattedMessage id="City" /></th>
            <th scope="col"><FormattedMessage id="PublicationDate" /></th>
            <th scope="col"><FormattedMessage id="Views" /></th>
          </tr>
        </thead>
        <tbody>
          {offers.map((e, i) => (
            <Job key={i} offer={e} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobsList;
