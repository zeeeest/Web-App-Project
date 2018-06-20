const express = require("express")
const supertest = require("supertest")
// Internal Modules
import * as Routes from "./index"
import UserActions from "../../../models/user-actions/user-actions"
import EmailCreator from "../../../models/email-creator/email-creator"
import EmailSenderConsole from "../../../models/emailsender-console/emailsender-console"

export function create() {
  var app = express()
  var request = supertest(app)
  var mockMailSender = jest.fn()
  var emailSender = new EmailCreator({
    backend: "https://testbackend.com",
    from: "me@me.com",
  })
  var emailCreator = new EmailSenderConsole()
  Routes.start({
    app,
    frontend: "http://mybackendintest.com",
    emailCreator: emailSender,
    emailSender: emailCreator,
    userActions: new UserActions({ emailSender, emailCreator }),
  })

  return { request, mockMailSender }
}