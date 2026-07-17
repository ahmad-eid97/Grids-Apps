// Static portfolio mode — form submission is simulated
export const sendContactMessage = async (_payload: ContactMessagePayload): Promise<unknown> => {
  // Return a truthy response so the UI shows the success toast
  return { code: '200', msg: 'Message received!' };
};

interface ContactMessagePayload {
  api_key: string;
  topic_id: string;
  company_name: string;
  contact_name: string;
  contact_phone: string;
  contact_email: string;
  contact_subject: string;
  contact_message: string;
}