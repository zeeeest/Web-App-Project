import React from "react"
import { fromNow } from "../../../utils/time"
import { priceString } from "../../../utils/numbers"
import t from "../../../utils/translate/translate"

const DesignLead = lead => {
  let fieldsCheck = {}
  lead.fields.forEach(element => {
    fieldsCheck[element.key] = element.key
  })
  const url = new String(lead.Website).trim().match(/^https?:\/\//i)
  return (
    <section
      className={`ldc-design-lead${lead.checked ? " card-checked" : ""}
        ${lead.isSelectable ? " card-selectable" : ""}
        ${
          lead.cardOpen || lead.constantCardOpen ? " card-open" : " card-closed"
        }
        ${lead.constantCardOpen ? " constant-card-open" : ""}`}
      onClick={lead.toggleCardView}
    >
      {lead.editLead && (
        <div className="lead_ops">
          <div className="edit op">
            <div
              className="pencil-ldc"
              onClick={() => {
                lead.push("/edit-lead-" + lead.id)
              }}
            />
          </div>
        </div>
      )}
      {fieldsCheck.Industry && (
        <div className="card-industry">{lead.Industry}</div>
      )}
      {fieldsCheck.Description && (
        <div className="card-description">{lead.Description}</div>
      )}
      {fieldsCheck.lead_price && (
        <div className="card-price">{priceString(lead.lead_price)}</div>
      )}
      <div className="card-details-wrapper">
        <div className="card-details">
          {fieldsCheck.Category && (
            <div className="card-detail-category">{lead.Category}</div>
          )}
          <div className="card-detail-date">{fromNow(lead.date)}</div>
          <div className="card-detail-location">
            {lead.State}
            {lead.State && lead.Location ? ", " : ""}
            {lead.Location}
          </div>
          <div className="card-contact-details">
            {fieldsCheck["Contact Person"] && (
              <div className="card-detail-contact-person">
                {lead["Contact Person"]}
              </div>
            )}
            {fieldsCheck.Email && (
              <div className="card-detail-email">{lead.Email}</div>
            )}
            {fieldsCheck.Telephone && (
              <div className="card-detail-telephone">{lead.Telephone}</div>
            )}
          </div>
        </div>
        <div className="card-features">
          {fieldsCheck.Specification && <span>{lead.Specification}</span>}
          {fieldsCheck.Price &&
            lead.Price && (
              <span>
                {t("Price ")}
                {priceString(lead.Price)}
              </span>
            )}
          {fieldsCheck.Website && (
            <span>
              <a
                onClick={e => {
                  e.stopPropagation()
                }}
                href={url ? lead.Website : `http://${lead.Website}`}
                target="_blank"
              >
                {lead.Website}
              </a>
            </span>
          )}
        </div>
      </div>
      {!lead.constantCardOpen && (
        <div className="card-arrow">
          <div className="arrow-left" />
          <div className="arrow-right" />
        </div>
      )}
      {lead.isSelectable && (
        <div
          className={"card-selector"}
          onClick={e => {
            e.stopPropagation()
            lead.toggleCheck(e, lead.id)
          }}
        >
          <div className="select-icon">
            <div className="up-down" />
            <div className="left-right" />
          </div>
        </div>
      )}
      {/* <div className="card-buttons">
        {lead.buttons &&
          lead.buttons.map(button => (
            <button
              key={button.value}
              className="card-btn"
              onClick={() => button.onClick(lead.id)}
            >
              {button.value}
            </Button>
          ))}
      </div> */}
    </section>
  )
}

export default DesignLead
