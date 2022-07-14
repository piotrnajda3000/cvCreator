import React from "react";

import * as S from "./Preview.Styled";
import { StyledIcon } from "../../styles/components/StyledIcon";

import { mdiEmail, mdiPhone, mdiGithub } from "@mdi/js";

import { isEveryChildNull, getValFromFields } from "./utils";

export default function Preview({ cv }) {
  const general = cv.find((s) => s.name === "General");
  const education = cv.find((s) => s.name === "Education");
  const experience = cv.find((s) => s.name === "Experience");

  return (
    <S.Page>
      <GeneralSection data={general} />
      <Section section={education} Item={EducationItem} />
      <Section section={experience} Item={ExperienceItem} />
    </S.Page>
  );
}

function GeneralSection({ data }) {
  const fields = data.items[0].fields;

  const [firstName, lastName, phone, email, github] = [
    getValFromFields(fields, "firstName"),
    getValFromFields(fields, "lastName"),
    getValFromFields(fields, "phone"),
    getValFromFields(fields, "email"),
    getValFromFields(fields, "github"),
  ];

  const generalFields = [firstName, lastName, phone, email, github];
  if (generalFields.every((field) => field === null)) return null;

  return (
    <>
      {isEveryChildNull(generalFields) ? null : (
        <S.General>
          <p className="name">
            {firstName} {lastName}
          </p>
          <div className="infoBar">
            {phone && (
              <div className="infoItem">
                <StyledIcon path={mdiPhone} size="20px" /> {phone}
              </div>
            )}
            {email && (
              <div className="infoItem">
                <StyledIcon path={mdiEmail} size="20px" />
                {email}
              </div>
            )}
            {github && (
              <div className="infoItem">
                <a href={`https://github.com/${github}`}>
                  <StyledIcon path={mdiGithub} size="20px" />
                </a>
              </div>
            )}
          </div>
        </S.General>
      )}
    </>
  );
}

function Section({ section, Item }) {
  const items = section.items.map((i) => <Item item={i} />);

  return (
    <>
      {isEveryChildNull(items) ? null : (
        <S.Section>
          <h2 className="header">{section.name}</h2>
          <div className="items">{items}</div>
        </S.Section>
      )}
    </>
  );
}

function ExperienceItem({ item }) {
  const fields = item.fields;
  const dateFrom = getValFromFields(fields, "from");
  const dateTo = getValFromFields(fields, "to");

  const place = getValFromFields(fields, "company");
  const position = getValFromFields(fields, "position");

  const arr = [dateFrom, dateTo, place, position];
  if (arr.every((field) => field === null)) return null;

  return (
    <div className="item">
      <div className="thin">
        {dateFrom} {dateFrom ? "-" : ""} {dateTo}
      </div>
      <div>
        <span className="thick">{place}</span>
        {place && position ? "," : ""} {position}
      </div>
    </div>
  );
}

function EducationItem({ item }) {
  const fields = item.fields;
  const dateFrom = getValFromFields(fields, "from");
  const dateTo = getValFromFields(fields, "to");

  const place = getValFromFields(fields, "school");
  const location = getValFromFields(fields, "location");
  const degree = getValFromFields(fields, "degree");

  const arr = [dateFrom, dateTo, place, location, degree];
  if (arr.every((field) => field === null)) return null;

  return (
    <div className="item">
      <div className="thin">
        <div className="date">
          {dateFrom} {dateFrom ? "-" : ""} {dateTo}
        </div>
        <div className="location">{location}</div>
      </div>
      <div>
        <div>
          <span className="thick">{place}</span>
        </div>
        <div>{degree}</div>
      </div>
    </div>
  );
}
