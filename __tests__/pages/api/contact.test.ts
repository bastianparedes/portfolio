import Contact from '../../../pages/api/contact'
import sendMail from '../../../utils/sendMail'
import { createMocks } from 'node-mocks-http'

jest.mock('../../../utils/sendMail')

describe('/api/contact', () => {
  it('should have correct status and end', async () => {
    ;(sendMail as jest.Mock).mockReturnValue(Promise.resolve())

    const { req, res } = createMocks({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        subject: 'Subject',
        text: 'Text'
      })
    })
    await Contact(req, res)
    expect(res._getStatusCode()).toBe(200)
    expect(res._isEndCalled()).toBe(true)
  })

  it('should have incorrect status and end', async () => {
    ;(sendMail as jest.Mock).mockReturnValue(Promise.reject(new Error()))

    const { req, res } = createMocks({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        subject: 'Subject',
        text: 'Text'
      })
    })
    await Contact(req, res)
    expect(res._getStatusCode()).toBe(500)
    expect(res._isEndCalled()).toBe(true)
  })
})
